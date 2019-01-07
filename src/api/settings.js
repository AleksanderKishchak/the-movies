import theMovieDb from './themoviedb';

theMovieDb.common.api_key = 'b0730a1cf45ff798ff411242700e6f40';

function successCB(data) {
  console.log(`Success callback: ${data}`);
}

function errorCB(data) {
  console.log(`Error callback: ${data}`);
}

export function test() {
  theMovieDb.search.getMulti({ query: 'Game%20Of%20Thrones' }, successCB, errorCB);
}
