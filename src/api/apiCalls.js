import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const apiKey = '?api_key=b0730a1cf45ff798ff411242700e6f40';
const language = '&language=ru-RU';
/*eslint-disable*/

async function callApi(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.warn(error);
  }
}

export async function fetchMoviesByName(name) {
  const url = `search/movie${apiKey}&query=${name}${language}`;
  const data = await callApi(url);

  return data.results;
}

export async function fetchMoviesByPopularity() {
  const url = `movie/popular${apiKey}${language}`;
  /* const data = await callApi(url);

  return data.results; */
  return axios.get(url).then(response => response.data.results);
}

export async function fetchMoviesByGenre(genreId) {
  const url = `/discover/movie${apiKey}${language}&sort_by=popularity.desc&include_adult=true&include_video=false&with_genres=${genreId}`;
  const data = await callApi(url);

  return data.results;
}
