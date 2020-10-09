import React from 'react';
import "./Inventory.css"
import fakeData from '../../fakeData'
const Inventory = () => {
  
    const handleAddProducts = () =>{
        
    }
 
    return (
        <div className='inventory'>
            <button onClick={handleAddProducts}> Add Product </button>
        </div>
    );
};

export default Inventory;