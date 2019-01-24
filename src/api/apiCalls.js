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

export function fetchMoviesByName(name, page = 1) {
  const url = `search/movie?api_key=${apiKey}&query=${name}${language}&page=${page}`;

  return callApi(url);
}

export function fetchMoviesByPopularity(page = 1) {
  const url = `movie/popular?api_key=${apiKey}${language}&page=${page}`;

  return callApi(url);
}

export function fetchMoviesByGenre(genreId, page = 1) {
  const url = `/discover/movie?api_key=${apiKey}${language}&page=${page}&with_genres=${genreId}`;

  return callApi(url);
}
