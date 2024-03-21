import React from 'react';
import './LandingPage.css';
import LandingBackground from './LandingBackground/LandingBackground'; 
import MeetDesigner from './MeetDesigner/MeetDesigner';
import TopRatedProperties from './TopRatedProperties/TopRatedProperties';

function LandingPage() {
  return (
    <div className='landingPageMain'>
        <LandingBackground />
        <MeetDesigner />
        <TopRatedProperties />
    </div>
  )
}

export default LandingPage;