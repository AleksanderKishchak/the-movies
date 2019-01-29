import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import compose from 'recompose/compose';

import { getMoviesByParams, setSearchText } from '../actions/movies';
import GenresList from '../components/GenresList/GenresList';

const mapStateToProps = state => ({
  genres: state.movies.genres
});

const mapDispatchToProps = dispatch => ({
  getMoviesByGenre: genreId => dispatch(getMoviesByParams({ genreId })),
  clearSearchInput: () => dispatch(setSearchText(''))
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(GenresList);
