import React from 'react';
import {Component} from 'react';
import ReactMapGL from 'react-map-gl';
import './styles.scss';

class Map extends Component {

  state = {
    viewport: {
      width: '100vh',
      height: '80vh',
      latitude: -34.5780655,
      longitude: -58.4560349,
      zoom: 12
    }
  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
      />
    );
  }
}
export default Map;