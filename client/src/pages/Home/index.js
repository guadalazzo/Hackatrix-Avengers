import React from 'react';

import MapContainer from '../../components/Map';
import Navbar from '../../components/Navbar';
import Logo from '../../components/Logo';

import './styles.scss';

function App() {
  return (
    <div className='map-container'>
      <MapContainer overlay={true} />
      <Navbar />
      <Logo />
    </div>
  );
}

export default App;
