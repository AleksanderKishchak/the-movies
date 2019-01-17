import React from 'react';
import PropTypes from 'prop-types';

import './Loader.sass';

function Loader({ wrapperStyle }) {
  return (
    <div className="loader-wrap" style={wrapperStyle}>
      <div className="loader" />
    </div>
  );
}

Loader.propTypes = {
  wrapperStyle: PropTypes.object
};

Loader.defaultProps = {
  wrapperStyle: {}
};

export default Loader;
