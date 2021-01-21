import { combineReducers } from 'redux';

import getPosts from './getPosts';
import getPost from './getPost';

const rootReducer = combineReducers({
  getPosts: getPosts,
  getPost: getPost,
});

export default rootReducer;
