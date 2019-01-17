import React from 'react';
import PropTypes from 'prop-types';

import './ToggleItem.sass';

function ToggleItem({
  checked, onChange, id, value, children
}) {
  return (
    <label htmlFor={id} className={`toggle-item${checked ? ' active' : ''}`}>
      {children}
      <input
        name="view-type"
        id={id}
        type="radio"
        hidden
        onChange={() => onChange(value)}
        checked={checked}
      />
    </label>
  );
}

ToggleItem.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  children: PropTypes.any.isRequired
};

export default ToggleItem;
