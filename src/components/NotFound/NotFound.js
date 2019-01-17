import React from 'react';
import BugReport from '@material-ui/icons/BugReport';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import './NotFound.sass';

function NotFound() {
  return (
    <div className="not-found">
      <div className="message">
        <BugReport style={{ width: '10rem', height: '10rem' }} />
        <h2>Page not found</h2>
      </div>
      <Link to="/">
        <Button variant="contained" color="primary">
          Home
        </Button>
      </Link>
    </div>
  );
}

export default NotFound;
