import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getMoviesByName } from '../actions/movies';
import Form from '../components/Form/Form';

const mapDispatchToProps = dispatch => ({
  onSubmit: name => dispatch(getMoviesByName(name))
});

export default withRouter(
  connect(
    undefined,
    mapDispatchToProps
  )(Form)
);
