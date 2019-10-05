import styled from 'styled-components';
import { Slider, InputNumber } from 'antd';

const Container = styled.div`
  > p {
    color: white;
    font-weight: 500;
  }

  .inputs {
    margin-top: 10px;
    display: flex;

    > label {
      margin-right: 6px;

      ~ label {
        margin-left: 10px;
      }
    }
  }

  .ant-slider-mark-text-active,
  .ant-slider-mark-text {
    color: white;
    font-size: 18px;
    padding: 3px;
  }
`;
const StyledSlider = styled(Slider)``;
const StyledInputNumber = styled(InputNumber)``;

export { Container, StyledSlider, StyledInputNumber };
