import React from 'react';
import './FooterThirdSection.css';
import rightArrow from '../../../Images/rightArrow.png'

function FooterThirdSection() {
  return (
    <div className='FooterThirdSectionCont'>
        <p>Stay Upto Date</p>
        <input className='footerInp' type="email" placeholder='Enter Your Email Address' />
        <button className='footerSubscribeBtn'>
            <span>Subscribe For</span>
            <span>Newsletter 
                <img src={rightArrow} alt="rightArrow" width='10px' style={{marginLeft: '3px', marginRight: '-3px'}}/>
                <img src={rightArrow} alt="rightArrow" width='10px' />
            </span>
        </button>
    </div>
  )
}

export default FooterThirdSection;