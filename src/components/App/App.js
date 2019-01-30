import React, { Component, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import withMobileDetection from '../withMobileDetection';
import Content from '../Content/Content';
import Loader from '../Loader/Loader';
import GoUp from '../GoUp/GoUp';
import './App.sass';

const MoviesListPage = lazy(() => import('../../pages/MoviesListPage/MoviesListPage'));
const MoviePage = lazy(() => import('../../pages/MoviePage/MoviePage'));
const Header = lazy(() => import('../Header/Header'));
const GenresList = lazy(() => import('../../containers/GenresListContainer'));
const Sidebar = lazy(() => import('../Sidebar/Sidebar'));
const NotFound = lazy(() => import('../NotFound/NotFound'));

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
        <Suspense fallback={<Loader verticalCenter />}>
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
        </Suspense>
      </div>
    );
  }
}

App.propTypes = {
  isMobile: PropTypes.bool.isRequired
};

export default withMobileDetection(App);
