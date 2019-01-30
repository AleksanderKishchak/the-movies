import React from 'react';
import PropTypes from 'prop-types';

import './Loader.sass';

const centeringStyles = {
  minHeight: 'calc(100vh - 260px)'
};

function Loader({ verticalCenter }) {
  return (
    <div className="loader-wrap" style={verticalCenter ? centeringStyles : {}}>
      <div className="loader" />
    </div>
  );
}

Loader.propTypes = {
  verticalCenter: PropTypes.bool
};

Loader.defaultProps = {
  verticalCenter: false
};

export default Loader;
