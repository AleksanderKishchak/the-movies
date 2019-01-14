import React from 'react';
import './App.sass';

import MoviesListContainer from '../../containers/MoviesListContainer';
import {
  Sidebar, Content, Header, FiltersBar
} from '../index';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar>
        <FiltersBar />
      </Sidebar>
      <Content>
        <MoviesListContainer />
      </Content>
    </div>
  );
}

export default App;
