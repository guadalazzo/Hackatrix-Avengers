import React from 'react';

import MapContainer from '../../components/Map';
import Navbar from '../../components/Navbar';

import './styles.scss';

function Result() {
  return (
    <div className='main-container'>
      <MapContainer overlay={false} />
    </div>
  );
}

export default Result;
