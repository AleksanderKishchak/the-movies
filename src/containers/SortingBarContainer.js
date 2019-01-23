import { connect } from 'react-redux';

import SortingBar from '../components/SortingBar/SortingBar';
import { setSorting } from '../actions/movies';

const mapStateToProps = ({ movies }) => ({
  activeSorting: movies.sortingType
});

const mapDispatchToProps = dispatch => ({
  onSetSorting: sortingType => dispatch(setSorting(sortingType))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortingBar);
