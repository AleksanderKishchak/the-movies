import React from 'react';
import PropTypes from 'prop-types';

import './MovieCard.sass';

import moment from 'moment';

function MovieCard({ movie }) {
  const { poster_path, title, release_date, overview } = movie;

  const releaseDate = release_date
    ? moment(release_date).format('MMMM D, YYYY')
    : null;

  const posterUrl = poster_path
    ? `http://image.tmdb.org/t/p/w185/${poster_path}`
    : 'https://via.placeholder.com/185x278/0000FF/808080';

  return (
    <article className="movie-card">
      <div className="poster">
        <img src={posterUrl} alt={title} className="poster-image" />
      </div>
      <div className="info">
        <div className="title-wrapper">
          <h3 className="title">{title}</h3>
          {releaseDate && <time className="release-date">{releaseDate}</time>}
        </div>
        <div className="description">{overview}</div>
        <div className="more-info">
          <a href="#" className="more-info-link">
            More info
          </a>
        </div>
      </div>
    </article>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieCard;
