import React from 'react'
import './MeetDesigner.css';
import MeetDesignerCard from './MeetDesignerCard/MeetDesignerCard';
import murphy from '../../../Images/murphy.jpg';
import simmons from '../../../Images/simmons.jpg';
import miles from '../../../Images/miles.jpg';
import richards from '../../../Images/richards.jpg';

function MeetDesigner() {
  let designersData = [
    {name: 'Kathryn Murphy', role: 'Designer', image: murphy, facebook: '', instagram: '', linkedin: '', twitter: ''},
    {name: 'Brooklyn Simmons', role: 'Professional Designer', image: simmons, facebook: '', instagram: '', linkedin: '', twitter: ''},
    {name: 'Floyd Miles', role: 'Interior Designer', image: miles, facebook: '', instagram: '', linkedin: '', twitter: ''},
    {name: 'Ronald Richards', role: 'Designer', image: richards, facebook: '', instagram: '', linkedin: '', twitter: ''}
  ];


  return (
    <div className='MeetDesignerMain'>
        <h1>Meet Our Designer</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur reprehenderit beatae vitae eaque dicta, assumenda perspiciatis neque quas nam id provident. Delectus libero soluta placeat.</p>

        <div className='designerCardCont'>
          {
            designersData.map((ele, ind) => (
              <MeetDesignerCard cardData={ele} key={`designercard${ind}`}/>
            ))
          }
        </div>
    </div>
  )
}

export default MeetDesigner;