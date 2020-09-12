import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Usercontext } from '../../App';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    const [signUser , setSignUser] = useContext(Usercontext);
    return (
        <div className='header'>
           <img src={logo} alt=""/>
            
    <nav>
     <div className="nav nav-tabs d-flex justify-content-center" id="nav-tab" role="tablist">
        <Link className="nav-link" id="nav-home-tab" data-toggle="tab" to="/home" role="tab" aria-controls="nav-home" aria-selected="false">Home</Link>
        <Link className="nav-link" id="nav-profile-tab" data-toggle="tab" to="/review" role="tab" aria-controls="nav-profile" aria-selected="false">Order Review</Link>
        <Link className="nav-link" id="nav-contact-tab" data-toggle="tab" to="/inventory" role="tab" aria-controls="nav-contact" aria-selected="false">Manage Inventory here</Link>
        <Link className="nav-link" id="nav-contact-tab" data-toggle="tab" to="/help" role="tab" aria-controls="nav-contact" aria-selected="false">Help</Link>
        <button onClick={()=>{setSignUser({})}}>Sign out</button>
     </div>
    </nav>
</div>
);
};

export default Header;