import { combineReducers } from 'redux';

import getPosts from './getPosts';
import getPost from './getPost';
import loginUser from './loginUser';

const rootReducer = combineReducers({
  getPosts: getPosts,
  getPost: getPost,
  loginUser: loginUser,
});

export default rootReducer;
