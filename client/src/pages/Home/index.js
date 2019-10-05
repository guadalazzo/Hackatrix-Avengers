import React from 'react';

import MapContainer from '../../components/Map';
import Navbar from '../../components/Navbar';

import './styles.scss';

function App() {
  return (
    <div className='main-container'>
      <MapContainer overlay={false} />
      <Navbar />
    </div>
  );
}

export default App;
