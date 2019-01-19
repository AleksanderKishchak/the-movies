import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import './App.sass';
import MoviesList from '../../containers/MoviesListContainer';
import GenresList from '../../containers/GenresListContainer';
import SortingBar from '../../containers/SortingBarContainer';
import withMobileDetection from '../withMobileDetection';
import {
  Sidebar, Content, Header, MoviePage, NotFound
} from '../index';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSidebarOpen: false
    };
  }

  closeSidebar = () => {
    this.setState({
      isSidebarOpen: false
    });
  };

  toggleSidebar = () => {
    this.setState(state => ({
      isSidebarOpen: !state.isSidebarOpen
    }));
  };

  render() {
    const { isMobile } = this.props;
    const { isSidebarOpen } = this.state;

    return (
      <div className="App">
        <Header isMobile={isMobile} toggleSidebar={this.toggleSidebar} />
        <Sidebar isMobile={isMobile} isOpen={isSidebarOpen} onClose={this.closeSidebar}>
          <GenresList />
        </Sidebar>
        <Content>
          <Switch>
            <Route exact path="/" component={MoviesList} />
            <Route path="/movie/:id" render={props => <MoviePage {...props} />} />
            <Route component={NotFound} />
          </Switch>
        </Content>
      </div>
    );
  }
}

App.propTypes = {
  isMobile: PropTypes.bool.isRequired
};

export default withMobileDetection(App);
