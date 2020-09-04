import React from 'react';
import "./ReviewItem.css"
const ReviewItem = (props) => {
 
    const {name,price,quntity,seller,img} = props.cart;

    return (
        <div className="reviewItem-section">
            <div className="row">
                <div className="col-md-6 img-section">
                     <img src={img} alt=""/>
                </div>
                <div className="col-md-6 information">
                    <h4 className="text">{name}</h4>
                    <p>By {seller}</p>
                    <p>Quntity : {quntity}</p>
                    <p>Price :{price}</p>
                    <button onClick={()=>{props.handleRomveItem(props.cart)}} className="main-btn">Remove</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;