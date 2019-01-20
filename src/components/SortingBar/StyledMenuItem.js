import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';

const styles = {
  display: 'flex',
  justifyContent: 'space-between',
  minWidth: '8rem'
};

function StyledMenuItem({ children, ...rest }) {
  return (
    <MenuItem {...rest} style={styles}>
      {children}
    </MenuItem>
  );
}

StyledMenuItem.propTypes = {
  children: PropTypes.node
};

StyledMenuItem.defaultProps = {
  children: ''
};

export default StyledMenuItem;
