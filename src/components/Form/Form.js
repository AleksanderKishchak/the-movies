import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';

import './Form.sass';

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
    }
  }
});

class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
  };

  static defaultProps = {
    onSubmit: () => {}
  };

  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };
  }

  onChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    const { onSubmit, history, location } = this.props;
    const { input } = this.state;
    e.preventDefault();

    if (!input) return;

    if (typeof onSubmit === 'function') {
      onSubmit(input);
    }

    if (location.pathname !== '/') {
      history.push('/');
    }
  };

  render() {
    const { input } = this.state;
    const { classes } = this.props;

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
            value={input}
            name="input"
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
