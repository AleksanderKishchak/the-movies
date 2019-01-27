import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';

import GenreItem from './GenreItem/GenreItem';
import './GenresList.sass';

function redirectIfNotOnMain(history, location) {
  if (location.pathname !== '/') {
    history.push('/');
  }
}

class GenreList extends Component {
  shouldComponentUpdate(nextProps) {
    const { genres, location } = this.props;

    return genres !== nextProps.genres || location.pathname !== nextProps.location.pathname;
  }

  sideEffectsOnClick = () => {
    const { history, location, clearSearchInput } = this.props;

    redirectIfNotOnMain(history, location);
    clearSearchInput();
  };

  render() {
    const { getMoviesByGenre, genres } = this.props;

    return (
      <div className="genres-list">
        <div className="genres-label">Genres</div>
        <List onClick={this.sideEffectsOnClick}>
          {genres.length > 0
            ? genres.map(({ name, id }) => (
              <GenreItem key={id} id={id} name={name} onClick={getMoviesByGenre} />
            ))
            : 'no genres'}
        </List>
      </div>
    );
  }
}

GenreList.propTypes = {
  getMoviesByGenre: PropTypes.func,
  clearSearchInput: PropTypes.func,
  genres: PropTypes.array,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

GenreList.defaultProps = {
  getMoviesByGenre: () => {},
  clearSearchInput: () => {},
  genres: []
};

export default GenreList;
