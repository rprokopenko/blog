import { combineReducers } from 'redux';

import getPosts from './getPosts';
import getPostsByCategory from './getPostsByCategory';
import getPostsByLatest from './getPostsByLatest';
import getPostsByPopular from './getPostsByPopular';
import getPost from './getPost';

const rootReducer = combineReducers({
  getPosts: getPosts,
  getPostsByCategory: getPostsByCategory,
  getPostsByLatest: getPostsByLatest,
  getPostsByPopular: getPostsByPopular,
  getPost: getPost,
});

export default rootReducer;
