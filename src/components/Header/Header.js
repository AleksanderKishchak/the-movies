import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/icons/Menu';

import FormContainer from '../../containers/FormContainer';
import logo from '../../img/logo.png';
import './Header.sass';

function Header({ isMobile, toggleSidebar }) {
  if (isMobile) {
    return (
      <header className="header mobile">
        <FormContainer />
        <button className="menu-button" type="button" onClick={toggleSidebar}>
          <Menu className="menu-icon" />
        </button>
      </header>
    );
  }

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <FormContainer />
    </header>
  );
}

Header.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
};

export default Header;
