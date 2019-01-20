import React from 'react';
import PropTypes from 'prop-types';

import './Sidebar.sass';

function Sidebar({
  children, isMobile, isOpen, onClose
}) {
  const sidebarClasses = `sidebar${isMobile ? ' mobile' : ''}${isOpen ? ' open' : ''}`;

  return (
    <div className={sidebarClasses}>
      <button type="button" className="close-btn" onClick={onClose}>
        &times;
      </button>
      {children}
    </div>
  );
}

Sidebar.propTypes = {
  children: PropTypes.any,
  isMobile: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

Sidebar.defaultProps = {
  children: ''
};

export default Sidebar;
