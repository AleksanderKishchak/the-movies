import React from 'react';
import PropTypes from 'prop-types';
import './Header.sass';

import { Button } from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import SortingBar from '../../containers/SortingBarContainer';
import FormContainer from '../../containers/FormContainer';

function Header({ isMobile, openSidebar }) {
  return (
    <header className="header">
      {isMobile ? (
        <Button onClick={openSidebar}>
          <Menu />
        </Button>
      ) : (
        'Hello, User!'
      )}

      {!isMobile && <SortingBar />}
      <FormContainer />
    </header>
  );
}

Header.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  openSidebar: PropTypes.func.isRequired
};

export default Header;
