import React from 'react'
import './FooterFirstSection.css';
import { Link } from 'react-router-dom';
import tree from '../../../Images/tree.png';
import facebookLogo from '../../../Images/facebookLogo.png';
import instagramLogo from '../../../Images/instagramLogo.png';
import whatsappLogo from '../../../Images/whatsappLogo.png';
import emailLogo from '../../../Images/emailLogo.png';
import callLogo from '../../../Images/callLogo.png';
import locationLogo from '../../../Images/locationLogo.png';

function FooterFirstSection() {
  return (
    <div className='footerFirstSection'>
        <div className='footerHomeLogoCont'>
            <div className='footerHomeLogo'>
                <Link to='/' style={{textDecoration: 'none'}}>
                    <div>
                        <img src={tree} alt="tree" width='40px'/>
                    </div>
                    <h2>Trophy Nig.</h2>
                    <p>PROPERTY LIMITED</p>
                </Link>
            </div>
        </div>
        
        <h5 style={{marginBottom: '5px'}}>Follow us on:</h5>
        <div className='footerSocialLink'>
            <Link style={{marginLeft: '-3px'}}><img src={facebookLogo} alt="facebookLogo" width='25px'/></Link>
            <Link style={{marginRight: '3px'}}><img src={instagramLogo} alt="instagramLogo" width='20px'/></Link>
            <Link><img src={whatsappLogo} alt="whatsappLogo" width='20px'/></Link>
        </div>

        <div className='footerContactCont'>
            <img src={emailLogo} alt="emailLogo" width='12px'/>
            <Link to='mailto:info@trophynig.com'>info@trophynig.com</Link>
        </div>
        <div className='footerContactCont'>
            <img src={callLogo} alt="callLogo" width='12px'/>
            <Link to='tel:+918549652148'>8549652148</Link>
        </div>
        <div className='footerContactCont footerContactContLast'>
            <img src={locationLogo} alt="locationLogo" width='12px'/>
            <div>
                <p>2972 Westheimer Rd. Santa Ana,</p>
                <p>Illinois 85486</p>
            </div>
        </div>
    </div>
  )
}

export default FooterFirstSection;