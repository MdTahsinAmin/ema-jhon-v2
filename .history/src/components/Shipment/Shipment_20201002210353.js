import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css'
import { Usercontext } from '../../App';
const Shipment = () => {
    const [signUser ,setSignUser] = useContext(Usercontext);

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch("example")); 
    return (
        <form className="ship-from" onSubmit={handleSubmit(onSubmit)}>
   
        <input name="name" ref={register({ required: true })} defaultValue={loginUser.name}   placeholder="Your Name" />
    
        {errors.name && <span className='error'> Name is required</span>}

        <input name="email" ref={register({ required: true })} defaultValue={loginUser.email} placeholder="Your Email Address" />
        
        {errors.email && <span className='error'> Email is required</span>}
        
        <input name="address" ref={register({ required: true })} placeholder="Your Address" />
        
        {errors.address && <span className='error'> Address is required</span>}
        
        <input name="phone" ref={register({ required: true })} placeholder="Your Phone" />
        
        {errors.phone && <span className='error'>Phone is required</span>}
    

        
        <input type="submit" />
      </form>
    );
};

export default Shipment;