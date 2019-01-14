import React from 'react';
import { MovieCard } from '../index';

import './MoviesList.sass';

function MoviesList({ movies, fetching }) {
  if (fetching) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="movies-list">
      {movies.length > 0
        ? movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
        : 'Movies not found'}
    </div>
  );
}

MoviesList.defaultProps = {
  movies: []
};

export default MoviesList;
