import React from 'react';

import MapContainer from '../../components/Map';

import './styles.scss';

function Result() {
  return (
    <div className='main-container'>
      <MapContainer overlay={false} />
    </div>
  );
}

export default Result;
