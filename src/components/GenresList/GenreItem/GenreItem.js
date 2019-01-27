import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { shouldUpdate } from 'recompose';

import './GenreItem.sass';

function GenreItem({ name, id, onClick }) {
  return (
    <ListItem
      key={id}
      button
      component="li"
      onClick={() => {
        onClick(id);
      }}
    >
      <ListItemText disableTypography primary={name} className="genre-name" />
    </ListItem>
  );
}

GenreItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func
};

GenreItem.defaultProps = {
  onClick: () => {}
};

export default shouldUpdate(() => false)(GenreItem);
