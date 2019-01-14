import { connect } from 'react-redux';

import MoviesList from '../components/MoviesList/MoviesList';

const mapStateToProps = ({ movies, fetching }) => ({
  movies,
  fetching
});

export default connect(mapStateToProps)(MoviesList);
