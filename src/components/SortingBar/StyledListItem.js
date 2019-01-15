import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    color: 'rgba(0, 0, 0, 0.87)',
    padding: '0.8rem',
    fontSize: '1rem'
  }
};

function StyledListItem({ children, classes, ...rest }) {
  return (
    <ListItem className={classes.root} {...rest}>
      {children}
    </ListItem>
  );
}

StyledListItem.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};

StyledListItem.defaultProps = {
  children: ''
};

export default withStyles(styles)(StyledListItem);
