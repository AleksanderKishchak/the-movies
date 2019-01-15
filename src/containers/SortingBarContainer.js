import { connect } from 'react-redux';

import SortingBar from '../components/SortingBar/SortingBar';

import { setSorting } from '../actions/sorting';

const mapStateToProps = state => ({
  activeSorting: state.sortingType
});

const mapDispatchToProps = dispatch => ({
  onSetSorting: sortingType => dispatch(setSorting(sortingType))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SortingBar);
