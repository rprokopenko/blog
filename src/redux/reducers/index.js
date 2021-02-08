import { combineReducers } from 'redux';

import getPosts from './getPosts';
import getPost from './getPost';
import loginUser from './loginUser';
import createPost from './createPost';
import deletePost from './deletePost';
import modal from './modal';
import updatePost from './updatePost';

const rootReducer = combineReducers({
  getPosts: getPosts,
  getPost: getPost,
  loginUser: loginUser,
  createPost: createPost,
  deletePost: deletePost,
  modal: modal,
  updatePost: updatePost,
});

export default rootReducer;
