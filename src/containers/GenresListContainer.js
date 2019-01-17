import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getMoviesByGenre } from '../actions/movies';
import GenreList from '../components/GenreList';

const mapDispatchToProps = dispatch => ({
  getMoviesByGenre: genreId => dispatch(getMoviesByGenre(genreId))
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(GenreList)
);
