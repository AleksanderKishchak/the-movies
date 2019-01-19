import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getMoviesByGenre } from '../actions/movies';
import GenresList from '../components/GenresList/GenresList';

const mapDispatchToProps = dispatch => ({
  getMoviesByGenre: genreId => dispatch(getMoviesByGenre(genreId))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(GenresList)
);
