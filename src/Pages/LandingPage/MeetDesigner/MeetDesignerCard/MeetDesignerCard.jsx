import React, { useState } from 'react';
import './MeetDesignerCard.css';
import {Link} from 'react-router-dom';
import facebookBlackLogo from '../../../../Images/facebookBlackLogo.png';
import instagramBlackLogo from '../../../../Images/instagramBlackLogo.png';
import linkedinLogo from '../../../../Images/linkedinLogo.png';
import twitterLogo from '../../../../Images/twitterLogo.png';

function MeetDesignerCard({cardData}) {

    const [hover, setHover] = useState(false);

    const handleHover = () => {
        setHover(!hover);
    }
  return (
    <div className={hover ? 'MeetDesignerCardCont MeetDesignerCardContHover' : 'MeetDesignerCardCont'} onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <img src={cardData.image} alt={cardData.name} />
        <h3>{cardData.name}</h3>
        <p>{cardData.role}</p>
        {
            hover && 
                <div className='designerSocialLinkCont'>
                <Link>
                    <img src={facebookBlackLogo} alt="facebookBlackLogo" width='20px'/>
                </Link>
                <Link>
                    <img src={instagramBlackLogo} alt="instagramBlackLogo" width='20px'/>
                </Link>
                <Link>
                    <img src={linkedinLogo} alt="linkedinLogo" width='20px'/>
                </Link>
                <Link>
                    <img src={twitterLogo} alt="twitterLogo" width='20px'/>
                </Link>
            </div>
        }
        
    </div>
  )
}

export default MeetDesignerCard;