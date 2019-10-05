import React, { useState, useMemo } from 'react';
import { Icon } from 'antd';

/* Components */
import { Container } from './styled';
import PriceSlider from '../PriceSlider';

const houses = [
  {
    id: 1,
    latitude: -34.5786389,
    longitude: -58.4214656,
    price: '39466.47',
    rooms: 2,
    neighborhood: 'Nuñez',
    rating: 1,
    title: 'Trailer Park Boys: The Movie',
    content:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
    roomates: true,
    guests: 4,
    image_url:
      'https://www.listenmoneymatters.com/cdn-cgi/image/fit=cover,width=900,format=auto,quality=75/https://www.listenmoneymatters.com/wp-content/uploads/2018/04/LMM-Cover-Images-2.jpg',
  },
  {
    id: 2,
    latitude: 34.57401,
    longitude: -58.4241263,
    price: '31674.49',
    rooms: 5,
    neighborhood: 'Puerto madero',
    rating: 5,
    title: 'Iris',
    content:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    roomates: false,
    guests: 2,
    image_url:
      'https://www.listenmoneymatters.com/cdn-cgi/image/fit=cover,width=900,format=auto,quality=75/https://www.listenmoneymatters.com/wp-content/uploads/2018/04/LMM-Cover-Images-2.jpg',
  },
  {
    id: 3,
    latitude: -34.5661615,
    longitude: -58.4321605,
    price: '23578.42',
    rooms: 1,
    neighborhood: 'Recoleta',
    rating: 3,
    title: 'Charlie Chan in Rio',
    content:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    roomates: false,
    guests: 5,
    image_url:
      'https://www.listenmoneymatters.com/cdn-cgi/image/fit=cover,width=900,format=auto,quality=75/https://www.listenmoneymatters.com/wp-content/uploads/2018/04/LMM-Cover-Images-2.jpg',
  },
];

const Sidebar = () => {
  const prices = houses.map(house => Number(house.price));
  const defaultMinValue = Math.trunc(Math.min(...new Set(prices)) - 10000);
  const defaultMaxValue = Math.trunc(Math.max(...new Set(prices)) + 10000);

  const [range, setRange] = useState([defaultMinValue, defaultMaxValue]);

  let housesParsed = houses.filter(({ price }) => Number(price) >= range[0] && Number(price) <= range[1]);

  return (
    <Container>
      <div className='info'>
        <div className='title'>
          <Icon type='fire' theme='twoTone' />

          <h2>Belgrano</h2>
        </div>
        <div className='filters'>
          <PriceSlider defaultMinValue={defaultMinValue} defaultMaxValue={defaultMaxValue} onSetRange={setRange} />
        </div>
        <div className='list'>
          {housesParsed.map(house => (
            <div className='item'>
              <div className='image'>
                <img src={house.image_url}></img>
              </div>

              <div className='main-info'>
                <h3>{house.title}</h3>
                <p className='stars'>Rating: {house.rating}/5</p>
                <p className='price'>{house.price}$</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Sidebar;
