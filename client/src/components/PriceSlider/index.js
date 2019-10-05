import React, { useState } from 'react';

import { Container, StyledSlider, StyledInputNumber } from './styled';

const PriceSlider = ({ defaultMinValue, defaultMaxValue, onSetRange }) => {
  const [minValue, setMinValue] = useState(defaultMinValue);
  const [maxValue, setMaxValue] = useState(defaultMaxValue);

  const marks = [minValue, maxValue].reduce((acc, value) => ({ ...acc, [value]: `${value}$` }), {});

  const handleValueChange = ([minV, maxV]) => {
    setMinValue(minV);
    setMaxValue(maxV);
    onSetRange([minV, maxV]);
  };

  const handleInputMinValue = value => {
    setMinValue(value);
  };
  const handleInputMaxValue = value => {
    setMaxValue(value);
  };

  return (
    <Container>
      <p>Precio</p>

      <div className='inputs'>
        <label htmlFor=''>Mínimo</label>
        <StyledInputNumber value={minValue} onChange={handleInputMinValue} />
        <label htmlFor=''>Máximo</label>
        <StyledInputNumber value={maxValue} onChange={handleInputMaxValue} />
      </div>

      <StyledSlider
        range
        marks={marks}
        min={defaultMinValue}
        max={defaultMaxValue}
        defaultValue={[0, 9000]}
        onChange={handleValueChange}
      ></StyledSlider>
    </Container>
  );
};

export default PriceSlider;
