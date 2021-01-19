import { combineReducers } from 'redux';

import getPosts from './getPosts';
import getPostsByCategory from './getPostsByCategory';
import getPostsByLatest from './getPostsByLatest';
import getPostsByPopular from './getPostsByPopular';

const rootReducer = combineReducers({
  getPosts: getPosts,
  getPostsByCategory: getPostsByCategory,
  getPostsByLatest: getPostsByLatest,
  getPostsByPopular: getPostsByPopular,
});

export default rootReducer;
