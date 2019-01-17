import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './MovieCard.sass';

import moment from 'moment';

function MovieCard({ movie, activeViewType }) {
  const {
    poster_path, title, release_date, overview, id
  } = movie;

  const cardClassNames = `movie-card ${activeViewType.toLowerCase()}`;

  const releaseDate = release_date ? moment(release_date).format('MMMM D, YYYY') : null;
  const movieOverview = overview.length > 100 ? `${overview.substr(0, 97)}...` : overview;
  const posterUrl = poster_path
    ? `http://image.tmdb.org/t/p/w185/${poster_path}`
    : 'https://via.placeholder.com/185x278/0000FF/808080';

  return (
    <article className={cardClassNames}>
      <div className="poster">
        <img src={posterUrl} alt={title} className="poster-image" />
      </div>
      <div className="info">
        <div className="title-wrapper">
          <h3 className="title">{title}</h3>
          {releaseDate && <time className="release-date">{releaseDate}</time>}
        </div>
        <div className="description">{movieOverview}</div>
        <div className="more-info">
          <Link to={`/movie/${id}`} className="more-info-link">
            More info
          </Link>
        </div>
      </div>
    </article>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieCard;
