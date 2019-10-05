import React, { useState, useMemo, useEffect } from 'react';
import { Icon } from 'antd';
import axios from 'axios';

/* Components */
import { Container } from './styled';
import PriceSlider from '../PriceSlider';


const Sidebar = () => {
  const [houses, setHouses] = useState([]);

  const prices = houses.map(house => Number(house.price));
  const defaultMinValue = Math.trunc(Math.min(...new Set(prices)) - 10000);
  const defaultMaxValue = Math.trunc(Math.max(...new Set(prices)) + 10000);

  const [range, setRange] = useState([defaultMinValue, defaultMaxValue]);

  useEffect(() => {
    axios.get('http://26041c64.ngrok.io/api/properties/')
      .then(response => setHouses(response.data.results));
  }, []);

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
