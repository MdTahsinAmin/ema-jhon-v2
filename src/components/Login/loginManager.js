import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';



 export const initializeLoginFramwork = () =>{
  if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
  }
}

export const signInWithGoogle = () =>{
    let  provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then(res =>{
       const {displayName,email,photoURL} = res.user;
       
       const signInUser = {
           isLogin : true,
           name : displayName,
           email:email,
           photoURL: photoURL,
           success:true
       }
       //setLognUser
        return signInUser;
    })
    .catch(error => {
       console.log("error : ",error);
    });
    
  }

  export const signOutWithGoogle = () =>{
    return firebase.auth().signOut().then(()=> {
      const signOutUser = {
        isLogin : false,
        name : '',
        email:'',
        photoURL: '',
    }
    //setLoginUser
     return signOutUser;
    }).catch((error) =>{
     console.log(error)
    });
  }

  export const createUserWithEmailAndPassword = (name, email, password) =>{
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res =>{
      
      const newUser = res.user;
      newUser.error = '';
      newUser.success = true;
     // setLoginUser(newUser);
      updateUserInfo(name);
      return newUser;
    })
    .catch((error) =>{
      
      var errorCode = error.code;
      var errorMessage = error.message;
      
      const newUser = {};
      
      newUser.error = errorMessage;
      newUser.success = false;
      //setLoginUser(newUser);
      return newUser;
    });
  }

  export const signInWithEmailAndPassword  =  (email, password)=>{
    return firebase.auth().signInWithEmailAndPassword(email, password)
      
    .then(res =>{
      const newUser = res.user;
      newUser.error = '';
      newUser.success = true;
      //setSignUser(newUser);
      //setLoginUser(newUser);
     // history.replace(from);
     return newUser;
    })

    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      const newUser = {};
      newUser.error = errorMessage;
      newUser.success = false;
     // setLoginUser(newUser);
     return newUser;
    });
  }

  const updateUserInfo = (name) =>{
    const  user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name,
    }).then(function() {
      // Update successful.
    }).catch(function(error) {
      // An error happened.
    });
  }
