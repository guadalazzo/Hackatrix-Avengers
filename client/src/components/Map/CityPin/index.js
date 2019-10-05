import React, {PureComponent} from 'react';

const ICON = `M35.77,22.81c0-5.58-4.53-10.11-10.11-10.11s-10.11,4.53-10.11,10.11c0,0-0.71,9.89,10.11,19.46
C36.48,32.71,35.77,22.81,35.77,22.81z M25.66,27.08c-2.36,0-4.27-1.91-4.27-4.27s1.91-4.27,4.27-4.27s4.27,1.91,4.27,4.27
S28.02,27.08,25.66,27.08z`;

const pinStyle = {
  cursor: 'pointer',
  fill: '#FF3100',
  stroke: 'none'
};

export default class CityPin extends PureComponent {
  render() {
    const {size = 30, onClick} = this.props;

    return (
      <svg
        height={size}
        viewBox="0 0 50 50"
        style={{
          ...pinStyle,
          transform: `translate(${-size / 2}px,${-size}px)`
        }}
        onClick={onClick}
      >
        <path d={ICON} />
      </svg>
    );
  }
}