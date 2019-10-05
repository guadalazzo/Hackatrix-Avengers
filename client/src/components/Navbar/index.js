import React from 'react';
import Button from 'antd';

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <ul className=''>
          <li>
            <h4 className='logo'>LOGO</h4>
          </li>
          <li>
            <button>Log in</button>
          </li>
        </ul>
      </nav>
    );
  }
}

class GuestButton extends React.Component {
  state;
}

export default Navbar;
