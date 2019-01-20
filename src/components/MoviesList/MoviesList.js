import React from 'react';
import PropTypes from 'prop-types';

import SortingBar from '../../containers/SortingBarContainer';
import ViewToggle from '../../containers/ViewToggleContainer';
import withMobileDetection from '../withMobileDetection';
import Loader from '../Loader/Loader';
import { MovieCard } from '../index';
import './MoviesList.sass';

function MoviesList({
  movies, fetching, activeViewType, isMobile
}) {
  if (fetching) {
    return <Loader />;
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
