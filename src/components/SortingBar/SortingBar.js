import React, { Component } from 'react';

import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StyledListItem from './StyledListItem';

import {
  POPULARITY_ASC,
  POPULARITY_DESC,
  RELEASE_DATE_ASC,
  RELEASE_DATE_DESC
} from '../../selectors/sortingSelector';

class SortingBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  close = () => {
    this.setState({
      isOpen: false
    });
  };

  toggleOpen = () => {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  };

  handleItemClick = sortingType => {
    this.props.onSetSorting(sortingType);
    this.close();
  };

  render() {
    const { isOpen } = this.state;
    const { activeSorting } = this.props;

    return (
      <List>
        <StyledListItem button onClick={this.toggleOpen}>
          Sort by
          {isOpen ? <ExpandLess /> : <ExpandMore />}
        </StyledListItem>
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <StyledListItem
              button
              onClick={this.handleItemClick.bind(this, POPULARITY_DESC)}
              selected={POPULARITY_DESC === activeSorting}
            >
              Popularity &uarr;
            </StyledListItem>
            <StyledListItem
              button
              onClick={this.handleItemClick.bind(this, POPULARITY_ASC)}
              selected={POPULARITY_ASC === activeSorting}
            >
              Popularity &darr;
            </StyledListItem>
            <StyledListItem
              button
              onClick={this.handleItemClick.bind(this, RELEASE_DATE_DESC)}
              selected={RELEASE_DATE_DESC === activeSorting}
            >
              Release Date &uarr;
            </StyledListItem>
            <StyledListItem
              button
              onClick={this.handleItemClick.bind(this, RELEASE_DATE_ASC)}
              selected={RELEASE_DATE_ASC === activeSorting}
            >
              Release Date &darr;
            </StyledListItem>
          </List>
        </Collapse>
      </List>
    );
  }
}

export default SortingBar;
