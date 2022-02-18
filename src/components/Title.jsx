import React from 'react';
import PropType from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>{headline}</h2>
    );
  }
}

export default Title;

Title.propTypes = {
  headline: PropType.string.isRequired,
};
