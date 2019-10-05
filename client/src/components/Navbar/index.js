import React from 'react';
import './styles.scss';

class Navbar extends React.Component {
  render() {
    return (
      <div className='div-nav'>
        <nav>
          <ul className='nav-list'>
            <li>
              <button className='btn btn-guest'><img src='icon-user.svg'></img><a href='#'>Log In</a></button>
            </li>
            <li>
              <button className='btn btn-owner'><img src='icon-house.svg'></img><a href='#'>Log In</a></button>
            </li>
          </ul>
       </nav>
      </div>
      
    );
  }
}

export default Navbar;

