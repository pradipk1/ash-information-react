import React from 'react';
import './LandingBackground.css';

function LandingBackground() {
  return (
    <div className='LandingBackgroundCont'>
        <div className='landingBgImg'></div>
        <div className='landingBgImgTextCont'>
            <div className='landingOfferingTextCont'>
                <span></span>
                <p>We are offering the</p>
            </div>
            <div>
                <h1>Best Real Estate Deals</h1>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi consequuntur non aliquam repellendus, modi maxime. Nemo sunt autem nulla, natus maiores illo cum tenetur, quidem, vel delectus magni id a!</p>
            </div>
            <div>
                <button>More Details</button>
            </div>
        </div>
    </div>
  )
}

export default LandingBackground;