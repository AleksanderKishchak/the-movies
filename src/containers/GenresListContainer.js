import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getMoviesByGenre } from '../actions/movies';
import GenresList from '../components/GenresList/GenresList';

const mapStateToProps = state => ({
  genres: state.movies.genres
});

const mapDispatchToProps = dispatch => ({
  getMoviesByGenre: genreId => dispatch(getMoviesByGenre(genreId))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(GenresList)
);
