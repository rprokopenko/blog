import { combineReducers } from 'redux';

import getPosts from './getPosts';
import getPost from './getPost';
import loginUser from './loginUser';
import createPost from './createPost';

const rootReducer = combineReducers({
  getPosts: getPosts,
  getPost: getPost,
  loginUser: loginUser,
  createPost: createPost,
});

export default rootReducer;
