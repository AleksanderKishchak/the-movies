import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { compose } from 'recompose';
import { getMoviesByParams, setSearchText } from '../actions/movies';
import Form from '../components/Form/Form';

const mapStateToProps = ({ movies }) => ({
  searchText: movies.searchText
});

const mapDispatchToProps = dispatch => ({
  onSubmit: name => dispatch(getMoviesByParams({ name })),
  onInputChange: text => dispatch(setSearchText(text))
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Form);
