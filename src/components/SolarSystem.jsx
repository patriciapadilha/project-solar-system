import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <section className="planets">
          {planets.map((element, index) => (
            <PlanetCard
              key={ index }
              planetName={ element.name }
              planetImage={ element.image }
            />
          ))}
        </section>

      </div>
    );
  }
}

export default SolarSystem;
