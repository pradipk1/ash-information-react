import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import FooterFirstSection from './FooterFirstSection/FooterFirstSection';
import FooterSecondSection from './FooterSecondSection/FooterSecondSection';
import FooterThirdSection from './FooterThirdSection/FooterThirdSection';

function Footer() {
  return (
    <div className='footerMain'>
        <div className='footerCont'>

            <FooterFirstSection />
            <FooterSecondSection />
            <FooterThirdSection />

        </div>
    </div>
  )
}

export default Footer;