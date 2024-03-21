import React from 'react';
import './TopRatedCard.css';

function TopRatedCard({cardData}) {
  return (
    <div className='TopRatedCardCont'>
        <div className='topRatedImgCont'><img src={cardData.image} alt="" /></div>
        <div className='topRatedInfoCont'>
            <div>
                <h4>{cardData.name}</h4>
                <p style={{fontSize: '12px'}}>{cardData.builder}</p>
                <span>{cardData.address}</span>
                <p>{cardData.roomSet}</p>
            </div>
            <p>{cardData.manager}</p>
        </div>
    </div>
  )
}

export default TopRatedCard;