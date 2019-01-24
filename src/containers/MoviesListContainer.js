import { connect } from 'react-redux';

import MoviesList from '../components/MoviesList/MoviesList';
import { getSortedMovies } from '../selectors/sortingSelector';
import { loadMore } from '../actions/movies';

const mapStateToProps = ({
  movies: {
    movies, fetching, viewType, error, sortingType
  }
}) => ({
  error,
  fetching,
  movies: getSortedMovies({ movies, sortingType }),
  activeViewType: viewType
});

const mapDispatchToProps = dispatch => ({
  loadMore: () => dispatch(loadMore())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesList);
