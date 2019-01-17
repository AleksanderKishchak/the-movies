import React from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../index';
import Loader from '../Loader/Loader';
import ViewToggle from '../../containers/ViewToggleContainer';
import withMobileDetection from '../withMobileDetection';
import './MoviesList.sass';

function MoviesList({
  movies, fetching, activeViewType, isMobile
}) {
  if (fetching) {
    return <Loader />;
  }

  return (
    <>
      {!isMobile && <ViewToggle />}
      <div className="movies-list">
        {movies.length > 0
          ? movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} activeViewType={activeViewType} />
          ))
          : 'Movies not found'}
      </div>
    </>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array,
  fetching: PropTypes.bool.isRequired,
  activeViewType: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired
};

MoviesList.defaultProps = {
  movies: []
};

export default withMobileDetection(MoviesList);
