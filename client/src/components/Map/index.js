import React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ReactMapGL, { Marker, Popup, NavigationControl, FullscreenControl } from 'react-map-gl';
import CityPin from './CityPin';
import CityInfo from './CityInfo';
import './styles.scss';

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
    };
  }

  _renderCityMarker = (place, index) => {
    const { history } = this.props;
    const { longitude, latitude } = place.location;

    return (
      <Marker key={`marker-${index}`} longitude={longitude} latitude={latitude}>
        <CityPin
          size={35}
          onClick={() => {
            console.log('HOLA');
            history.push(`/result/${place.id}`);
          }}
        />
        {/* <span className='marker-price'>$ {place.price}</span> */}
      </Marker>
    );
  };

  render() {
    const places = [
      {
        id: 1,
        price: '8101.64',
        rooms: 4,
        neighborhood: 'Palermo',
        living_period: {
          period: 'Semana',
          time: 6,
        },
        location: {
          latitude: -34.5780655,
          longitude: -58.4560349,
        },
      },
      {
        id: 2,
        price: '46912.72',
        rooms: 4,
        neighborhood: 'Puerto madero',
        living_period: {
          period: 'Semana',
          time: 1,
        },
        location: {
          latitude: -34.59807,
          longitude: -58.4586582,
        },
      },
    ];
    return (
      <React.Fragment>
        <div className='map-container'>
          {this.props.overlay && <span className='overlay'></span>}
          <ReactMapGL
            {...this.state.viewport}
            mapStyle='mapbox://styles/mapbox/streets-v9'
            onViewportChange={viewport => this.setState({ viewport })}
          >
            {places.map(this._renderCityMarker)}
          </ReactMapGL>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(Map);
