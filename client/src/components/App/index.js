import React from 'react';
import MapContainer from '../Map';


import './styles.scss'

function App() {
  return (
    <div className="main-container">
      <MapContainer overlay={false} />
    </div>
  );
}

export default App;
