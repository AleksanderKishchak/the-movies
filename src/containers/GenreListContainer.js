import { connect } from 'react-redux';

import { getMoviesByGenre } from '../actions/movies';
import GenreList from '../components/GenreList';

const mapDispatchToProps = dispatch => ({
  getMoviesByGenre: genreId => dispatch(getMoviesByGenre(genreId))
});

export default connect(
  null,
  mapDispatchToProps
)(GenreList);
