import React from 'react';
import './LandingPage.css';
import LandingBackground from './LandingBackground/LandingBackground'; 
import MeetDesigner from './MeetDesigner/MeetDesigner';

function LandingPage() {
  return (
    <div className='landingPageMain'>
        <LandingBackground />
        <MeetDesigner />
    </div>
  )
}

export default LandingPage;