import React from 'react';
import './Cart.css'
import { useHistory } from 'react-router-dom';
const Cart = (props) => {
    
    const cart = props.cart;

    const totalPrice = cart.reduce((sum,product)=>sum+product.price*product.quntity,0)
    let shipping = 0;
    if(totalPrice > 100){
        shipping = 0;
    }
    else if(totalPrice > 50){
        shipping  = 30.6
    }
    else if(totalPrice > 25){
        shipping = 15.47
    }
    else {
        shipping = 10.25
    }
    
    const tax = Number((Number(totalPrice.toFixed(2))*0.2).toFixed(2));
    
    const totalBeforeTax = Number((Number(totalPrice.toFixed(2))+Number(shipping.toFixed(2))).toFixed(2));

    const orderAmount = Number(totalPrice.toFixed(2))+Number(shipping.toFixed(2))+Number(tax);

    return (
       <div className="cart-continer">
           <div className="cart">
               <h3>Order - Summery</h3>
               <p>Item order : {props.cart.length} </p>
               <table>
                   <tbody>
                       <tr>
                        <td>Item Price :</td>
                          <td>$ {Number(totalPrice.toFixed(2))}</td>
                       </tr>
                       <tr>
                           <td>Shipping &amp; Handling:</td>
                             <td>$ {shipping}</td>
                       </tr>
                       <tr>
                       <td>Total before tax: </td>
                         <td>$ {totalBeforeTax}</td>
                       </tr>
                       <tr>
                           <td>Estimated Tax: : </td>
                          <td>$ {Number(tax)}</td>
                       </tr>
                       <tr className="total-row">
                           <td>Order total : </td>
                            <td>$ {Number(orderAmount.toFixed(2))}</td>
                       </tr>
                   </tbody>
               </table>
           </div>
           {
               props.children
           }
       </div>
    );
};

export default Cart;