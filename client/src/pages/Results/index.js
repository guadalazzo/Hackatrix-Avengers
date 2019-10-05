import React from 'react';

import MapContainer from '../../components/Map';
import Sidebar from '../../components/Sidebar';

import './styles.scss';

function App() {
  return (
    <div className='main-container'>
      <MapContainer overlay={false} />
      <Sidebar />
    </div>
  );
}

export default App;
