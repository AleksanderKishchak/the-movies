import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const apiKey = process.env.REACT_APP_API_KEY;

const language = '&language=en-EN';

function callApi(url) {
  return axios
    .get(url)
    .then(response => response.data)
    .catch(error => {
      throw error;
    });
}

export function fetchMovie(id) {
  const url = `/movie/${id}?api_key=${apiKey}${language}&append_to_response=videos`;

  return callApi(url);
}

export function fetchMoviesByName(name) {
  const url = `search/movie?api_key=${apiKey}&query=${name}${language}`;

  return callApi(url);
}

export function fetchMoviesByPopularity() {
  const url = `movie/popular?api_key=${apiKey}${language}`;

  return callApi(url);
}

export function fetchMoviesByGenre(genreId) {
  const url = `/discover/movie?api_key=${apiKey}${language}&with_genres=${genreId}`;

  return callApi(url);
}
