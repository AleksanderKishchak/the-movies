import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';

import StyledMenuItem from './StyledMenuItem';
import './SortingBar.sass';

import {
  POPULARITY_ASC,
  POPULARITY_DESC,
  RELEASE_DATE_ASC,
  RELEASE_DATE_DESC
} from '../../selectors/sortingSelector';

class SortingBar extends PureComponent {
  static propTypes = {
    onSetSorting: PropTypes.func.isRequired,
    activeSorting: PropTypes.string.isRequired
  };

  selectStyles = {
    marginLeft: 10
  };

  handleChange = e => {
    const { value } = e.target;
    const { onSetSorting, activeSorting } = this.props;

    if (value !== activeSorting) {
      onSetSorting(value);
    }
  };

  render() {
    const { activeSorting } = this.props;
    return (
      <div className="sorting">
        <span className="sorting-label">Sort by:</span>
        <div className="select-wrapper">
          <Select
            style={this.selectStyles}
            value={activeSorting}
            onChange={this.handleChange}
            inputProps={{
              name: 'age',
              id: 'age-simple'
            }}
          >
            <StyledMenuItem value={POPULARITY_DESC}>
              Popularity <span>&uarr;</span>
            </StyledMenuItem>
            <StyledMenuItem value={POPULARITY_ASC}>
              Popularity <span>&darr;</span>
            </StyledMenuItem>
            <StyledMenuItem value={RELEASE_DATE_DESC}>
              Release Date <span>&uarr;</span>
            </StyledMenuItem>
            <StyledMenuItem value={RELEASE_DATE_ASC}>
              Release Date <span>&darr;</span>
            </StyledMenuItem>
          </Select>
        </div>
      </div>
    );
  }
}

export default SortingBar;
