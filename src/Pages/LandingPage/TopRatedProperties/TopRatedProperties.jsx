import React from 'react';
import './TopRatedProperties.css';
import topRated1 from '../../../Images/topRated1.jpeg';
import topRated2 from '../../../Images/topRated2.jpg';
import topRated3 from '../../../Images/topRated3.jpeg';
import TopRatedCard from './TopRatedCard/TopRatedCard';

function TopRatedProperties() {

    let topRatedData = [
        {image: topRated1, name: 'Mapkson Gardenia', builder: 'Mapkson Builders', address: 'Greater Kailash, Delhi', roomSet: '3 Bed 2 bath', manager: 'Managed by JR Developers'},
        {image: topRated2, name: 'Mapkson Gardenia', builder: 'Mapkson Builders', address: 'Greater Kailash, Delhi', roomSet: '3 Bed 2 bath', manager: 'Managed by JR Developers'},
        {image: topRated3, name: 'Mapkson Gardenia', builder: 'Mapkson Builders', address: 'Greater Kailash, Delhi', roomSet: '3 Bed 2 bath', manager: 'Managed by JR Developers'}
    ];

  return (
    <div className='TopRatedPropertiesCont'>
        <h1>Top Rated Properties</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur reprehenderit beatae vitae eaque dicta, assumenda perspiciatis neque quas nam id provident. Delectus libero soluta placeat.</p>

        <div className='topRatedCardMain'>
            {
                topRatedData.map((ele, ind) => (
                    <TopRatedCard cardData={ele} key={`topRated${ind}`}/>
                ))
            }
        </div>
    </div>
  )
}

export default TopRatedProperties