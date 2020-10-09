import React ,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Shop/Product/Product';
import './ProductDetails.css'
const ProductDetails = () => {

    const {productKey} = useParams();
   
    const [product,setProduct] = useState({});

    useEffect(()=>{
         fetch(`http://localhost:5000/products/${productKey}`)
         .then((response => response.json()))
         .then(data => setProduct(data))
    },[productKey])


    //const product = fakeData.find(product => product.key===productKey);
    
    //console.log(product);
    const showBtn = false;
    return (
        <div className='single-product'>
            <Product product={product} key={productKey} showBtn={showBtn}></Product>
        </div>
    );
};

export default ProductDetails;
