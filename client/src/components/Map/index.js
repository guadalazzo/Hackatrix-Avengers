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
    const { longitude, latitude } = place;

    return (
      <Marker key={`marker-${index}`} longitude={longitude} latitude={latitude}>
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

  render() {
    const places = [{
      id:1,
      latitude:-34.5786389,
      longitude:-58.4214656,
      price:"39466.47",
      rooms:2,
      neighborhood:"Nuñez",
      rating:1,
      title:"Trailer Park Boys: The Movie",
      content:"Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
      roomates:true,
      guests:4,
      image_url:"https://www.listenmoneymatters.com/cdn-cgi/image/fit=cover,width=900,format=auto,quality=75/https://www.listenmoneymatters.com/wp-content/uploads/2018/04/LMM-Cover-Images-2.jpg"
    }, {
      id:2,
      latitude:34.57401,
      longitude:-58.4241263,
      price:"31674.49",
      rooms:5,
      neighborhood:"Puerto madero",
      rating:5,
      title:"Iris",
      content:"Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      roomates:false,
      guests:2,
      image_url:"https://www.listenmoneymatters.com/cdn-cgi/image/fit=cover,width=900,format=auto,quality=75/https://www.listenmoneymatters.com/wp-content/uploads/2018/04/LMM-Cover-Images-2.jpg"
    }, {
      id:3,
      latitude:-34.5661615,
      longitude:-58.4321605,
      price:"23578.42",
      rooms:1,
      neighborhood:"Recoleta",
      rating:3,
      title:"Charlie Chan in Rio",
      content:"Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
      roomates:false,
      guests:5,
      image_url:"https://www.listenmoneymatters.com/cdn-cgi/image/fit=cover,width=900,format=auto,quality=75/https://www.listenmoneymatters.com/wp-content/uploads/2018/04/LMM-Cover-Images-2.jpg"
    }];

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
