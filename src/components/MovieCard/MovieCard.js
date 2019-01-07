import React from 'react';
import PropTypes from 'prop-types';

import './MovieCard.sass';

import moment from 'moment';

function MovieCard({ movie }) {
  const {
    poster_path, original_title, release_date, overview
  } = movie;
  const formattedReleaseDate = moment(release_date).format('MMMM D, YYYY');

  const posterUrl = poster_path
    ? `http://image.tmdb.org/t/p/w185/${poster_path}`
    : 'https://via.placeholder.com/185x278/0000FF/808080';

  return (
    <article className="movie-card">
      <div className="poster">
        <img src={posterUrl} alt={original_title} />
      </div>
      <div className="info">
        <h3 className="title">{original_title}</h3>
        <time className="release-date">{formattedReleaseDate}</time>
        <div className="description">{overview}</div>
        <a href="#" className="more-info-link">
          More info
        </a>
      </div>
    </article>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieCard;
