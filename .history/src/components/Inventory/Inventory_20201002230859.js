import React from 'react';
import "./Inventory.css"
import fakeData from '../../fakeData'
const Inventory = () => {
    const handleAddProduct = () =>{
        fetch('http://localhost:5000/addProduct',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(fakeData[0])
        })
    }
 
    return (
        <div className='inventory'>
            <button onClick={handleAddProduct}> Add Product </button>
        </div>
    );
};

export default Inventory;