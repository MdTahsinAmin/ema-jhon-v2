import React, { useState } from 'react';
import "./Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
     const {img,name,price,seller,star,stock ,key} = props.product;

    return (
        <div className="card mb-3 ml-2" style={{maxWidth: "500px"}}>
     <div className="row no-gutters">
     <div className="col-md-4 img-section">
      <img src={img} class="card-img" alt=""/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
    <h5 className="card-title"><Link to ={`/review/${key}`}>{name}</Link></h5>
       <p>by {seller}</p>
       <p>Price : {price}</p>
       <div className="d-flex justify-content-between">
        <p><small>only {stock} left in stock - order soon</small></p>
        <p><FontAwesomeIcon icon ={faStar}/> Rating : {star} </p>
       </div>
       <div>
          {
           
           props.showBtn && <button className="main-btn" onClick={()=>{props.handleProduct(props.product)}}> <FontAwesomeIcon icon ={faShoppingCart }></FontAwesomeIcon>Buy Now </button>
          
          }
       </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Product;