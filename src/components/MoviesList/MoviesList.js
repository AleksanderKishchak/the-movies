import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Loader from '../Loader/Loader';
import MovieCard from '../MovieCard/MovieCard';
import './MoviesList.sass';

class MoviesList extends PureComponent {
  static propTypes = {
    movies: PropTypes.array,
    fetching: PropTypes.bool.isRequired,
    activeViewType: PropTypes.string.isRequired,
    error: PropTypes.bool.isRequired,
    reachedBottom: PropTypes.bool,
    loadMore: PropTypes.func
  };

  static defaultProps = {
    movies: [],
    reachedBottom: false,
    loadMore: () => {}
  };

  componentDidUpdate(prevProps) {
    const { reachedBottom, loadMore } = this.props;

    if (!prevProps.reachedBottom && reachedBottom) {
      loadMore();
    }
  }

  render() {
    const {
      movies, fetching, activeViewType, error
    } = this.props;

    if (fetching && !movies.length > 0) {
      return <Loader verticalCenter />;
    }

    return (
      <>
        <div className={`movies-list ${activeViewType.toLowerCase()}`}>
          {movies.length > 0
            ? movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
            : !fetching && !error && 'Movies not found'}
        </div>
        {error ? <div className="error-message">Something went wrong!</div> : null}
        {fetching ? <Loader /> : null}
      </>
    );
  }
}

export default MoviesList;
