import React from 'react';
import PropType from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p testid="planet-name">{planetName}</p>
        <img src={ planetImage } alt={ planetName } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropType.string.isRequired,
  planetImage: PropType.string.isRequired,
};

export default PlanetCard;
