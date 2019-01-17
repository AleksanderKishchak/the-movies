import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import './Form.sass';

class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
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

    return (
      <form onSubmit={this.onSubmit} className="search-form">
        <TextField
          onChange={this.onChange}
          label="Search"
          type="search"
          value={input}
          name="input"
          margin="normal"
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
      </form>
    );
  }
}

export default Form;
