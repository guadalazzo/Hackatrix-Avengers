import React, { useState } from 'react';

import { Container, StyledSlider, StyledInputNumber } from './styled';

const PriceSlider = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10000);

  const marks = [minValue, maxValue].reduce((acc, value) => ({ ...acc, [value]: `${value}$` }), {});
  console.log('TCL: PriceSlider -> marks', marks);

  const handleMinValue = ([value]) => {
    setMinValue(value);
  };
  const handleMaxValue = ([, value]) => {
    setMaxValue(value);
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
        defaultValue={[0, 9000]}
        onChange={handleMinValue}
        onAfterChange={handleMaxValue}
      ></StyledSlider>
    </Container>
  );
};

export default PriceSlider;
