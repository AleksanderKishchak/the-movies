import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';

import GenreItem from './GenreItem/GenreItem';
import './GenresList.sass';

function GenreList({
  getMoviesByGenre, genres, history, location
}) {
  return (
    <div className="genres-list">
      <div className="genres-label">Genres</div>
      <List>
        {genres.length > 0
          ? genres.map(({ name, id }) => (
            <GenreItem
              history={history}
              location={location}
              key={id}
              id={id}
              name={name}
              onClick={getMoviesByGenre}
            />
          ))
          : 'no genres'}
      </List>
    </div>
  );
}

GenreList.propTypes = {
  getMoviesByGenre: PropTypes.func,
  genres: PropTypes.array,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

GenreList.defaultProps = {
  getMoviesByGenre: () => {},
  genres: []
};

export default GenreList;
