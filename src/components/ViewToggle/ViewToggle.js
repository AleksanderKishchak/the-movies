import React from 'react';
import PropTypes from 'prop-types';

import ViewModule from '@material-ui/icons/ViewModule';
import ViewList from '@material-ui/icons/ViewList';
import ToggleItem from './ToggleItem/ToggleItem';
import './ViewToggle.sass';

function ViewToggle({ activeViewType, onChangeView }) {
  return (
    <div className="list-toggle">
      <ToggleItem
        name="view-type"
        id="toggle-list"
        onChange={onChangeView}
        checked={activeViewType === 'LIST'}
        value="LIST"
      >
        <ViewList />
      </ToggleItem>

      <ToggleItem
        name="view-type"
        id="toggle-tiles"
        onChange={onChangeView}
        checked={activeViewType === 'TILES'}
        value="TILES"
      >
        <ViewModule />
      </ToggleItem>
    </div>
  );
}

ViewToggle.propTypes = {
  activeViewType: PropTypes.string.isRequired,
  onChangeView: PropTypes.func.isRequired
};

export default ViewToggle;
