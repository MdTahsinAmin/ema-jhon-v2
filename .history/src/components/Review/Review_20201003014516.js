import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
import "./Review.css"
import Cart from '../Cart/Cart';

import happyImg from '../../images/giphy.gif'
const Review = () => {
    
    const history = useHistory();

    const goToShipment = () =>{
        
        history.push('/shipment');
        

    }


    const [cart , setCart] = useState([]);
    
    const [happy , setHappy] = useState(false);

    const handlePlaceOrder = ()=>{
        setCart([]);
        processOrder(cart)
        setHappy(true);
    }
    const thanks = (happy &&<img src={happyImg} alt=""/>)

    const handleRomveItem = (product)=>{
        const newCart = cart.filter(pd => pd.key !== product.key);
        removeFromDatabaseCart(product.key);
        setCart(newCart);
    }
   
    useEffect(()=>{
        
        const saveCart = getDatabaseCart();
       
        const productKeys = Object.keys(saveCart);
        
        fetch('http://localhost:5000/productsByKeys',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(productKeys)
        })
        .then(response => response.json())
        .then(data =>setCart(data))
            
       //setCart(products);
    },[])
    //console.log(cart);
    return (
        <div className="review-section">
           <div className="ordered-section">
                {
                    cart.map(cart => <ReviewItem cart={cart} key ={cart.key} handleRomveItem={handleRomveItem}></ReviewItem>)
                }
                {
                    thanks
                }
           </div>
            <div className='cart-section'>
               <Cart cart={cart}>
                   <button  onClick={()=>goToShipment()} className="main-btn">Procced Cheackout</button>
               </Cart>
            </div>
        </div>
    );
};

export default Review;