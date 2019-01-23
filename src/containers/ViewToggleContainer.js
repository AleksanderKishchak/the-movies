import { connect } from 'react-redux';

import ViewToggle from '../components/ViewToggle/ViewToggle';
import { setViewType } from '../actions/movies';

function mapStateToProps({ movies }) {
  return {
    activeViewType: movies.viewType
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeView: viewType => dispatch(setViewType(viewType))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewToggle);
