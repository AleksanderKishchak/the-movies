import { createSelector } from 'reselect';

export const POPULARITY_DESC = 'POPULARITY_DESC';
export const POPULARITY_ASC = 'POPULARITY_ASC';
export const RELEASE_DATE_DESC = 'RELEASE_DATE_DESC';
export const RELEASE_DATE_ASC = 'RELEASE_DATE_ASC';

const getMovies = state => state.movies;
const getSortingType = state => state.sortingType;

export const getSortedMovies = createSelector(
  [getMovies, getSortingType],
  (movies, sortingType) => {
    const newMovies = [...movies];
    switch (sortingType) {
      case POPULARITY_DESC:
        return newMovies.sort((movie1, movie2) => movie2.popularity - movie1.popularity);

      case POPULARITY_ASC:
        return newMovies.sort((movie1, movie2) => movie1.popularity - movie2.popularity);

      case RELEASE_DATE_DESC:
        return newMovies.sort((movie1, movie2) => {
          const [date1, date2] = [movie1.release_date, movie2.release_date];

          if (date2 > date1) return 1;
          if (date2 < date1) return -1;

          return 0;
        });

      case RELEASE_DATE_ASC:
        return newMovies.sort((movie1, movie2) => {
          const [date1, date2] = [movie1.release_date, movie2.release_date];

          if (date2 < date1) return 1;
          if (date2 > date1) return -1;

          return 0;
        });

      default:
        return movies;
    }
  }
);
