import React, { Component, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import GenresList from '../../containers/GenresListContainer';
import withMobileDetection from '../withMobileDetection';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';
import Header from '../Header/Header';
import NotFound from '../NotFound/NotFound';
import Loader from '../Loader/Loader';
import GoUp from '../GoUp/GoUp';
import './App.sass';

const MoviesListPage = lazy(() => import('../../pages/MoviesListPage/MoviesListPage'));
const MoviePage = lazy(() => import('../../pages/MoviePage/MoviePage'));

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
        <GoUp />
        <Header isMobile={isMobile} toggleSidebar={this.toggleSidebar} />
        <Sidebar isMobile={isMobile} isOpen={isSidebarOpen} onClose={this.closeSidebar}>
          <GenresList />
        </Sidebar>
        <Content>
          <Suspense fallback={<Loader verticalCenter />}>
            <Switch>
              <Route exact path="/" component={MoviesListPage} />
              <Route path="/movie/:id" render={props => <MoviePage {...props} />} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </Content>
      </div>
    );
  }
}

App.propTypes = {
  isMobile: PropTypes.bool.isRequired
};

export default withMobileDetection(App);
