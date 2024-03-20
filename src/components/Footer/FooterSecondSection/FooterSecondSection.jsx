import React from 'react';
import './FooterSecondSection.css';
import { Link } from 'react-router-dom';

function FooterSecondSection() {
  return (
    <div className='FooterSecondSectionCont'>
        <h3 style={{marginBottom: '10px'}}>Company</h3>
        <Link style={{marginBottom: '10px'}}>About Us</Link>
        <Link style={{marginBottom: '10px'}}>Contact Us</Link>
        <Link style={{marginBottom: '10px'}}>Pricing</Link>
        <Link style={{marginBottom: '5px'}}>Terms & Condition</Link>
        <Link style={{marginBottom: '5px'}}>Report A Problem</Link>
        <Link style={{marginBottom: '5px'}}>Private Policy</Link>
    </div>
  )
}

export default FooterSecondSection;