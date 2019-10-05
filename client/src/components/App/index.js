import React from 'react';
import MapContainer from '../Map';
import Navbar from '../Navbar';

import './styles.scss';

function App() {
  return (
    <div className='main-container'>
      <MapContainer overlay={true} />
      <Navbar />
    </div>
  );
}

export default App;
