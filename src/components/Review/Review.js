import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import "./Review.css"
import Cart from '../Cart/Cart';

import happyImg from '../../images/giphy.gif'
const Review = () => {

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

            const products = productKeys.map(key =>{
               
            const product = fakeData.find(pd => pd.key === key);

            product.quntity = saveCart[key];

            return product;
        }) 
       setCart(products);
    },[])
    //console.log(cart);
    return (
        <div className="review-section">
           <div className="ordered-section">
                {
                    cart.map(cart => <ReviewItem cart={cart} key ={cart.key} handleRomveItem={handleRomveItem}></ReviewItem>)
                }{
                    thanks
                }
           </div>
            <div className='cart-section'>
               <Cart cart={cart}>
                   <button  onClick={()=>handlePlaceOrder()} className="main-btn">Place Order</button>
               </Cart>
            </div>
        </div>
    );
};

export default Review;