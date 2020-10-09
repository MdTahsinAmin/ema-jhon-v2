import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Avatar , Button} from '@material-ui/core';
import logo from '../../images/google.png'
import { Usercontext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, initializeLoginFramwork, signInWithEmailAndPassword, signInWithGoogle, signOutWithGoogle } from './loginManager';

firebase.initializeApp(firebaseConfig);

function Login() {
 
// to go shipment then login
  const history = useHistory();

  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

   const [signInUser , setSignUser] = useContext(Usercontext)
  
  const [newUser , setNewUser] = useState(false);
 
  const [loginUser , setLoginUser] = useState({
     isLogin : false,
     name :'',
     email :'',
     photoURL:'',
     password :'',
     error :'',
     success : false
  })

  initializeLoginFramwork();
 

  const googleSingIn = () =>{
    signInWithGoogle().then(res =>{
        handlerResponse(res,true);
    })
  }

  const googleSingOut = () =>{
    signOutWithGoogle().then(res =>{
        handlerResponse(res,false);
    })
  }

  
  const handleSubmit = (event) =>{
   
    if(newUser && loginUser.email && loginUser.password){
        createUserWithEmailAndPassword(loginUser.name , loginUser.email, loginUser.password)
        .then(res =>{
            handlerResponse(res,true);
        })
    }
    if(!newUser && loginUser.email && loginUser.password){
        signInWithEmailAndPassword(loginUser.email, loginUser.password).then(res =>{
            handlerResponse(res,true);
        })
    }
   
    event.preventDefault();
  }
  
  const handlerResponse = (res , redirect)=>{
    setLoginUser(res);
    setSignUser(res);
    if(redirect) history.replace(from);
  }


  const handlerBlur = (event) =>{
    
  let isFieldValid = true;

   if(event.target.name ==='email'){
     isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
   }
   if(event.target.name ==='password'){
    isFieldValid = /\d{1}/.test(event.target.value) && event.target.value.length > 6 ;

   }

   if(isFieldValid){
      const newUser = {...loginUser};

      newUser[event.target.name] = event.target.value;

      setLoginUser(newUser);
   }
   
  }
  

  return (
    <div style={{textAlign: 'center'}}>
     {
       loginUser.isLogin ? <Button onClick={ googleSingOut} variant="contained" color="primary" >
       <Avatar src={logo} /> <span className='login'>Logout With Google</span>
   </Button> : 
    <Button onClick={googleSingIn} variant="contained" color="primary" >
          <Avatar src={logo} /> <span className='login'>Login With Google</span>
      </Button>
     }
     {
       loginUser.isLogin && <div>
         <div className='some'>
         <Avatar src={loginUser.photoURL} />
         </div>
       <p>Name : {loginUser.name}</p>
       <p>Email : {loginUser.email}</p>
     </div>
     }
    
     <div>
        <h3>Our own Authorization</h3>
        <input type="checkbox" onChange= {()=>{setNewUser(!newUser)}} name="newUser" id=""/>
        <label htmlFor="newUser">For New acccoutn</label>
       <form onSubmit={handleSubmit} >
          {newUser && <input type="text" onBlur ={handlerBlur}  name ="name" placeholder='Enter your name'/>} <br/>
         <input onBlur ={handlerBlur} type="email" name="email"  placeholder='Enter your email address' required/> <br/>
         
         <input onBlur={handlerBlur} type="password" name="password" placeholder='Enter your password' required/> <br/>
         
         <input type="submit" value="Sign In"/>

       </form>
       <p style={{color: 'red'}}>{loginUser.error}</p>
    {
      loginUser.success && <p style={{color: 'green'}}> {newUser ? 'Creact  a new acccoutn successfully' : 'login successfully'} </p>
    }
     </div>

        
    </div>
  );
}

export default Login;
