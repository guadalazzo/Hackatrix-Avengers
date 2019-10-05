import React, { useState } from 'react';

import { StyledSlider } from './styled';

const PriceSlider = () => {
  const marks = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
      style: {
        color: '#f50',
      },
      label: <strong>100°C</strong>,
    },
  };

  return (
    <StyledSlider range marks={marks} defaultValue={[26, 37]}>
      ...
    </StyledSlider>
  );
};

export default PriceSlider;
