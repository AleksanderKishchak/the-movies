import { connect } from 'react-redux';

import MoviesList from '../components/MoviesList/MoviesList';
import { getSortedMovies } from '../selectors/sortingSelector';

const mapStateToProps = state => ({
  movies: getSortedMovies(state),
  fetching: state.fetching,
  activeViewType: state.viewType
});

export default connect(mapStateToProps)(MoviesList);
