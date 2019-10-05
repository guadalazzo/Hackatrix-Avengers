import React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactMapGL, { Marker, Popup, NavigationControl, FullscreenControl } from 'react-map-gl';
import CityPin from './CityPin';
import CityInfo from './CityInfo';
import './styles.scss';
import axios from 'axios';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: '100vh',
        height: '80vh',
        latitude: -34.5780655,
        longitude: -58.4560349,
        zoom: 12,
      },
      properties: []
    };
  }

  _renderCityMarker = (place, index) => {
    console.log('place: ', place);
    const { history } = this.props;
    const { longitude, latitude } = place;

    return (
      <Marker key={`marker-${index}`} longitude={Number(longitude)} latitude={Number(latitude)}>
        <CityPin
          size={35}
          onClick={() => {
            console.log('HOLA');
            history.push(`/result/${place.id}`);
          }}
        />
        <span className='marker-price'>$ {place.price}</span>
      </Marker>
    );
  };

  getProperties = () => {
    axios.get('http://localhost:8000/api/properties/')
      .then(response => this.setState({properties: response.data.results}));
  }

  componentDidMount(){
    this.getProperties();
  }
  render() {
    const { properties } = this.state;

    return (
      <React.Fragment>
        <div className='map-container'>
           {this.props.overlay && <span className='overlay'></span>} 
          <ReactMapGL
            {...this.state.viewport}
            mapStyle='mapbox://styles/mapbox/streets-v9'
            onViewportChange={viewport => this.setState({ viewport })}
          >
            {properties.map(this._renderCityMarker)}
          </ReactMapGL>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(Map);
