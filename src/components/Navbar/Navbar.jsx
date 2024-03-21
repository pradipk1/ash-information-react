import React from 'react';
import './Navbar.css';
import tree from '../../Images/tree.png';
import { Link } from 'react-router-dom';
import profileLogo from '../../Images/profileLogo.png';

function Navbar() {
  return (
    <div className='navbarMain'>
        <div className='navHomeLogo'>
            <Link to='/' style={{textDecoration: 'none'}}>
                <div>
                    <img src={tree} alt="tree" width='40px'/>
                </div>
                <h2>Trophy Nig.</h2>
                <p>PROPERTY LIMITED</p>
            </Link>
        </div>

        <div className='navLinkCont'>
            <Link to='/'>Home</Link>
            <Link to='/'>Properties</Link>
            <Link to='/'>Designs</Link>
            <Link to='/'>Search</Link>
            <Link to='/'>About us</Link>
            <Link to='/'>Contact us</Link>
            <div style={{cursor: 'pointer'}}>
                <img src={profileLogo} alt="profileLogo" width='30px'/>
            </div>
            <select>
                <option value="">Create Listing</option>
            </select>
        </div>
    </div>
  )
}

export default Navbar;