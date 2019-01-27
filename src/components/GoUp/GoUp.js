import React, { PureComponent } from 'react';

import arrow from '../../img/arrow-up.svg';
import './GoUp.sass';

class GoUp extends PureComponent {
  state = {
    visible: false
  };

  componentDidMount() {
    window.addEventListener('wheel', this.onWheel);
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.onWheel);
  }

  onWheel = e => {
    const { visible } = this.state;
    const { scrollY } = window;

    if ((e.deltaY > 0 && visible) || scrollY < 1000) {
      this.setState({
        visible: false
      });
    } else if (e.deltaY < 0 && !visible && scrollY > 1000) {
      this.setState({
        visible: true
      });
    }
  };

  onClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  render() {
    const { visible } = this.state;

    return (
      <button
        type="button"
        className={`go-up-button${!visible ? ' hide' : ''}`}
        onClick={this.onClick}
      >
        <img src={arrow} alt="arrow up" className="go-up-icon" />
      </button>
    );
  }
}

export default GoUp;
