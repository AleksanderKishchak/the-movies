import React, { Component } from 'react';
import './App.sass';

import Button from '@material-ui/core/Button';
import { Sidebar, Content, MoviesList } from './components';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    fetch(
      'https://api.themoviedb.org/3/search/movie?api_key=b0730a1cf45ff798ff411242700e6f40&query=aquaman'
    )
      .then(response => response.json())
      .then(movies => {
        this.setState({
          movies: movies.results
        });
      })
      .catch(error => console.warn(error));
  }

  render() {
    return (
      <div className="App">
        <Sidebar>
          <Button color="secondary" variant="contained">
            Click
          </Button>
        </Sidebar>
        <Content>
          <MoviesList movies={this.state.movies} />
        </Content>
      </div>
    );
  }
}

export default App;
