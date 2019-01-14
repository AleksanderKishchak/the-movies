import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function GenreItem({ name, id, onClick }) {
  return (
    <ListItem key={id} button onClick={onClick}>
      <ListItemText primary={name} />
    </ListItem>
  );
}

export default GenreItem;
