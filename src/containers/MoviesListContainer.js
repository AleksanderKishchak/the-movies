import { connect } from 'react-redux';

import MoviesList from '../components/MoviesList/MoviesList';
import { getSortedMovies } from '../selectors/sortingSelector';

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

export default connect(mapStateToProps)(MoviesList);
