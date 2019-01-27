import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getMoviesByName, setSearchText } from '../actions/movies';
import Form from '../components/Form/Form';

const mapStateToProps = ({ movies }) => ({
  searchText: movies.searchText
});

const mapDispatchToProps = dispatch => ({
  onSubmit: name => dispatch(getMoviesByName(name)),
  onInputChange: text => dispatch(setSearchText(text))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Form)
);
