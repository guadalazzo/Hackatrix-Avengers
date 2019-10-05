import React from 'react';
import './styles.scss';


class Logo extends React.Component {
  render() {
    return (
      <div className='container logo'>
        <div>
        <img src='temprent.svg'></img>
        </div>
        <div className='sub'>
          <p>ALQUILERES TEMPORALES Y A LARGO PLAZO EN C.A.B.A.</p>
        </div>
        <form role='search' className='search'>
            <input type='text' />
                <button type='submit'>Buscar</button>
        </form>
      </div>
    );
  }
}


export default Logo;
