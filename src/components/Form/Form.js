import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './Form.sass';

class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
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
    const { onSubmit } = this.props;
    const { input } = this.state;
    e.preventDefault();

    if (!input) return;

    if (typeof onSubmit === 'function') {
      onSubmit(input);
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
        />
        <div className="submit-button">
          <Button margin="normal" type="submit">
            search
          </Button>
        </div>
      </form>
    );
  }
}

export default Form;
