import { connect } from 'react-redux';

import { getMoviesByName } from '../actions/movies';
import Form from '../components/Form/Form';

const mapDispatchToProps = dispatch => ({
  onSubmit: name => dispatch(getMoviesByName(name))
});

export default connect(
  undefined,
  mapDispatchToProps
)(Form);
