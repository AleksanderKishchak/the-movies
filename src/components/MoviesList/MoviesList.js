import React from 'react';
import PropTypes from 'prop-types';

import SortingBar from '../../containers/SortingBarContainer';
import ViewToggle from '../../containers/ViewToggleContainer';
import withMobileDetection from '../withMobileDetection';
import Loader from '../Loader/Loader';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.sass';

function MoviesList({
  movies, fetching, activeViewType, isMobile, error
}) {
  if (error) {
    return <div className="error-message">Something went wrong!</div>;
  }

  if (fetching && !movies.length > 0) {
    return <Loader wrapperStyle={{ minHeight: 'calc(100vh - 160px)' }} />;
  }

  return (
    <>
      <div className="actions">
        <SortingBar />
        {!isMobile && <ViewToggle />}
      </div>
      <div className="movies-list">
        {movies.length > 0
          ? movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} activeViewType={activeViewType} />
          ))
          : !fetching && 'Movies not found'}
      </div>
      {fetching ? <Loader /> : null}
    </>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array,
  fetching: PropTypes.bool.isRequired,
  activeViewType: PropTypes.string.isRequired,
  isMobile: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired
};

MoviesList.defaultProps = {
  movies: []
};

export default withMobileDetection(MoviesList);
