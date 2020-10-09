import React, { useState, useEffect } from 'react';
import './Shop.css'
import Product from './Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { useHistory } from 'react-router-dom';

const Shop = () => {

    const history = useHistory();

    const handler = ()=>{
        history.push(`/review`);
    }
   
     const [products , setProduct] = useState([]);
    
     const [cart, setCart] = useState([]);
    
     useEffect(()=>{
        fetch('/products')
        .then(res => res.json())
        .then(data => setProduct(data))
   },[])
    console.log(products);
     useEffect(()=>{
           const savaData = getDatabaseCart();

           const productKeys = Object.keys(savaData);

           if(products.length){
            const products = productKeys.map(key=>{
                const product = products.find(product => product.key === key);
                
                product.quntity = savaData[key];
 
                return product;
            })
            setCart(products);
           }
     },[products])
    

    let newCart =[];

    const handleProduct = (product)=>{
       
        const sameProduct = cart.find(pd => pd.key === product.key);
        let count = 1;
        if(sameProduct){
          count = sameProduct.quntity + 1;
          sameProduct.quntity = count;

          const others = cart.filter(pd => pd.key !== product.key);
          
          newCart = [...others,sameProduct];

        }
        else{
            product.quntity = 1;

            newCart =[...cart,product];
        }

        setCart(newCart);


        addToDatabaseCart(product.key,count);

    }
   
    const showBtn = true;
    return (
        <div className='shop-container'>
            <div className="py-4 product-container">
                   <div className="row">
                        {
                            products.map(product => <Product product={product} key={product.key} handleProduct={handleProduct} showBtn={showBtn}></Product>)
                        }
                   </div>
            </div>
            <div className='cart-section'>
                <Cart cart={cart}>
                <button  onClick={handler} className='review-order'>Review Oder</button>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;