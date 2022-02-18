import React from 'react';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div>
        <div data-testid="solar-system">SolarSystem</div>
        <Title headline="Planetas" />
      </div>
    );
  }
}

export default SolarSystem;
