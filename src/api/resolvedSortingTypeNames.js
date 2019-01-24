import {
  POPULARITY_ASC,
  POPULARITY_DESC,
  RELEASE_DATE_ASC,
  RELEASE_DATE_DESC
} from '../selectors/sortingSelector';

export default {
  [POPULARITY_ASC]: 'popularity.asc',
  [POPULARITY_DESC]: 'popularity.asc',
  [RELEASE_DATE_ASC]: 'release_date.asc',
  [RELEASE_DATE_DESC]: 'release_date.desc'
};
