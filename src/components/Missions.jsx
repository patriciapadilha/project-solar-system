import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Mission extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <section className="mission">
          {missions.map((element, index) => (
            <MissionCard
              key={ index }
              name={ element.name }
              year={ element.year }
              country={ element.country }
              destination={ element.destination }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default Mission;
