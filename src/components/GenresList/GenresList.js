import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';

import { GenreItem } from '../index';
import genres from '../../api/genres.json';
import './GenresList.sass';

class GenreList extends React.PureComponent {
  render() {
    const { getMoviesByGenre, history, location } = this.props;

    return (
      <div className="genres-list">
        <div className="genres-label">Genres</div>
        <List>
          {genres.length > 0
            ? genres.map(({ name, id }) => (
              <GenreItem
                history={history}
                location={location}
                key={id}
                id={id}
                name={name}
                onClick={getMoviesByGenre}
              />
            ))
            : 'no genres'}
        </List>
      </div>
    );
  }
}

GenreList.propTypes = {
  getMoviesByGenre: PropTypes.func,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

GenreList.defaultProps = {
  getMoviesByGenre: () => {}
};

export default GenreList;
