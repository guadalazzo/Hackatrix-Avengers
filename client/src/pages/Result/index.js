import React from 'react';

import MapContainer from '../../components/Map';

import './styles.scss';

function Result() {

  const place =  {
    id:1,
    latitude:-34.5786389,
    longitude:-58.4214656,
    price:"39466.47",
    rooms:2,
    neighborhood:"Nuñez",
    rating:1,
    title:"Trailer Park Boys: The Movie",
    content:"Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    roomates:true,
    guests:4,
    image_url:"https://www.listenmoneymatters.com/cdn-cgi/image/fit=cover,width=900,format=auto,quality=75/https://www.listenmoneymatters.com/wp-content/uploads/2018/04/LMM-Cover-Images-2.jpg"
  };

  return (
    <div className='main-container'>
      <MapContainer overlay={true} />
      <article>
      <div className="title-and-photo">
        <h2>● {place.neighborhood}</h2>
        <img src={place.image_url} alt="casa"/>
      </div>
      <div className="description">
      <div className="inqui">
        <h2>Inquilinos anteriores</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, quae libero sequi at nisi temporibus quia veritatis possimus provident recusandae, natus doloribus praesentium. Architecto, molestias nihil! Vero quisquam rem blanditiis.</p>
      </div>
      <div className="price-and-description">
        <p> $ {place.price}</p>
      </div>
      </div>
     
      </article>
    </div>
  );
}

export default Result;
