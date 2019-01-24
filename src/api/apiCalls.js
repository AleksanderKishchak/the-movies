import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const apiKey = process.env.REACT_APP_API_KEY;
const language = '&language=en-EN';

export function callApi(url) {
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

// By default returns URL for getting popular movies
export function getURLbyParams(params = {}, page = 1) {
  // Getting movies by Name
  if (params.name) {
    return `search/movie?api_key=${apiKey}&query=${params.name}${language}&page=${page}`;
  }

  // Getting movies by Genre
  if (params.genreId) {
    return `/discover/movie?api_key=${apiKey}${language}&page=${page}&with_genres=${
      params.genreId
    }`;
  }

  return `movie/popular?api_key=${apiKey}${language}&page=${page}`;
}
