import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const apiKey = '?api_key=b0730a1cf45ff798ff411242700e6f40';
const language = '&language=en-EN';

export function fetchMovie(id) {
  const url = `/movie/${id}${apiKey}${language}&append_to_response=videos`;
  return axios.get(url).then(response => response.data);
}

export function fetchMoviesByName(name) {
  const url = `search/movie${apiKey}&query=${name}${language}`;
  return axios.get(url).then(response => response.data.results);
}

export function fetchMoviesByPopularity() {
  const url = `movie/popular${apiKey}${language}`;
  return axios.get(url).then(response => response.data.results);
}

export function fetchMoviesByGenre(genreId) {
  const url = `/discover/movie${apiKey}${language}&sort_by=popularity.desc&include_adult=true&include_video=false&with_genres=${genreId}`;
  return axios.get(url).then(response => response.data.results);
}
