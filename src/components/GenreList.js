import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import { GenreItem } from './index';
import genres from '../api/genres.json';

function GenreList({ getMoviesByGenre }) {
  return (
    <div className="genres-list">
      <List>
        Genres <br />
        <hr />
        {genres.length > 0
          ? genres.map(({ name, id }) => (
            <GenreItem key={id} id={id} name={name} onClick={() => getMoviesByGenre(id)} />
          ))
          : 'no genres'}
      </List>
    </div>
  );
}

GenreList.propTypes = {
  getMoviesByGenre: PropTypes.func
};

GenreList.defaultProps = {
  getMoviesByGenre: () => {}
};

export default GenreList;
