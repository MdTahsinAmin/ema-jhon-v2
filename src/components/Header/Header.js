import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
           <img src={logo} alt=""/>
            
    <nav>
     <div className="nav nav-tabs d-flex justify-content-center" id="nav-tab" role="tablist">
        <a className="nav-link" id="nav-home-tab" data-toggle="tab" href="/home" role="tab" aria-controls="nav-home" aria-selected="false">Home</a>
        <a className="nav-link" id="nav-profile-tab" data-toggle="tab" href="/review" role="tab" aria-controls="nav-profile" aria-selected="false">Order Review</a>
        <a className="nav-link" id="nav-contact-tab" data-toggle="tab" href="/inventory" role="tab" aria-controls="nav-contact" aria-selected="false">Manage Inventory here</a>
        <a className="nav-link" id="nav-contact-tab" data-toggle="tab" href="/help" role="tab" aria-controls="nav-contact" aria-selected="false">Help</a>
     </div>
    </nav>
</div>
);
};

export default Header;