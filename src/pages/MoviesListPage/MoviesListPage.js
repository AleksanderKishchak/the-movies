import React from 'react';
import PropTypes from 'prop-types';

import MoviesList from '../../containers/MoviesListContainer';
import SortingBar from '../../containers/SortingBarContainer';
import ViewToggle from '../../containers/ViewToggleContainer';
import withMobileDetection from '../../components/withMobileDetection';
import './MoviesListPage.sass';

function MoviesListPage({ isMobile }) {
  return (
    <>
      <div className="actions">
        <SortingBar />
        {!isMobile && <ViewToggle />}
      </div>
      <MoviesList />
    </>
  );
}

MoviesListPage.propTypes = {
  isMobile: PropTypes.bool.isRequired
};

export default withMobileDetection(MoviesListPage);
