import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function GenreItem({
  name, id, onClick, history, location
}) {
  return (
    <ListItem
      key={id}
      button
      onClick={() => {
        onClick(id);
        if (location.pathname !== '/') {
          history.push('/');
        }
      }}
    >
      <ListItemText primary={name} />
    </ListItem>
  );
}

GenreItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

GenreItem.defaultProps = {
  onClick: () => {}
};

export default GenreItem;
