import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ActivityGauge from '../../components/ActivityGauge/ActivityGauge';
import Loader from '../../components/Loader/Loader';
import { fetchMovie } from '../../api/apiCalls';
import './MoviePage.sass';

class MoviePage extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      fethcing: true,
      hasError: false,
      movie: null
    };
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props;

    fetchMovie(params.id)
      .then(movie => {
        this.setState({
          movie,
          fethcing: false,
          hasError: false
        });
      })
      .catch(error => {
        console.error(error);

        this.setState({
          hasError: error.message
        });
      });
  }

  render() {
    const { hasError, fethcing, movie } = this.state;

    if (hasError) {
      return <div className="error-message">Something went wrong. {hasError}</div>;
    }

    if (fethcing) {
      return <Loader verticalCenter />;
    }

    const {
      budget,
      genres,
      title,
      release_date,
      poster_path,
      runtime,
      status,
      overview,
      vote_average
    } = movie;
    const genresName = genres.map(genre => genre.name);

    const posterUrl = poster_path
      ? `http://image.tmdb.org/t/p/original/${poster_path}`
      : 'https://via.placeholder.com/400x600/0000FF/808080';

    return (
      <div className="movie">
        <div className="poster-wrapper">
          <img className="poster" src={posterUrl} alt={`${title} poster`} />
        </div>

        <section className="movie-info">
          <div className="info-header">
            <div className="popularity">
              <ActivityGauge value={vote_average} />
            </div>
            <div>
              <h3 className="movie-name">{title}</h3>
              <span className="release-date">({release_date.substr(0, 4)})</span>
              <div className="status">
                <output>{status}</output>
              </div>
            </div>
          </div>
          <dl className="info-list">
            <dt>Runtime</dt>
            <dd>{runtime}m</dd>

            <dt>Genres</dt>
            <dd>{genresName.join(', ')}</dd>

            <dt>Budget</dt>
            <dd>{budget}$</dd>

            {overview && (
              <>
                <dt>Overview</dt>
                <dd>{overview}</dd>
              </>
            )}
          </dl>
        </section>
      </div>
    );
  }
}

export default MoviePage;
