import React from 'react';
import { Icon } from 'antd';

/* Components */
import { Container } from './styled';
import PriceSlider from '../PriceSlider';

const Sidebar = () => {
  return (
    <Container>
      <div className='info'>
        <div className='title'>
          <Icon type='fire' theme='twoTone' />

          <h2>Belgrano</h2>
        </div>
        <div className='filters'>
          <PriceSlider />
        </div>
        <div className='list'>...</div>
      </div>
    </Container>
  );
};

export default Sidebar;
