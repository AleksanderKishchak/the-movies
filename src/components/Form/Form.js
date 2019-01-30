import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';

import './Form.sass';

// styles for material ui input
const styles = () => ({
  input: {
    color: 'white'
  },
  formControl: {
    marginBottom: 6,
    flexDirection: 'row',
    flexBasis: 300
  },
  cssLabel: {
    color: 'white',
    '&$cssFocused': {
      color: 'white'
    }
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: 'white'
    },
    borderBottomColor: 'white',
    '&:before': {
      borderBottomColor: 'white'
    },
    '&:hover:before': {
      borderBottomColor: 'white!important'
    }
  }
});

class Form extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    searchText: PropTypes.string.isRequired
  };

  onChange = e => {
    const { value } = e.target;
    const { onInputChange } = this.props;

    onInputChange(value);
  };

  onSubmit = e => {
    const { onSubmit, history, location } = this.props;
    const { searchText } = this.props;
    e.preventDefault();

    if (!searchText) return;

    if (typeof onSubmit === 'function') {
      onSubmit(searchText);
    }

    if (location.pathname !== '/') {
      history.push('/');
    }
  };

  render() {
    const { classes, searchText } = this.props;

    return (
      <form onSubmit={this.onSubmit} className="search-form">
        <FormControl className={classes.formControl}>
          <InputLabel
            htmlFor="search-input"
            classes={{
              root: classes.cssLabel,
              focused: classes.cssFocused
            }}
          >
            Search
          </InputLabel>
          <Input
            onChange={this.onChange}
            type="search"
            value={searchText}
            name="search-input"
            id="search-input"
            fullWidth
            classes={{
              underline: classes.cssUnderline
            }}
            className={classes.input}
          />
        </FormControl>
        <IconButton type="submit" aria-label="search">
          <SearchIcon className="search-icon" />
        </IconButton>
      </form>
    );
  }
}

export default withStyles(styles)(Form);
