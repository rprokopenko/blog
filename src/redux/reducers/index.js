import { combineReducers } from 'redux';

import loginUser from './loginUser';
import getPosts from './getPosts';
import getPost from './getPost';
import createPost from './createPost';
import updatePost from './updatePost';
import deletePost from './deletePost';
import modal from './modal';
import getCategories from './getCategories';
import likePost from './likePost';

const rootReducer = combineReducers({
  loginUser: loginUser,
  getPosts: getPosts,
  getPost: getPost,
  createPost: createPost,
  updatePost: updatePost,
  deletePost: deletePost,
  modal: modal,
  getCategories: getCategories,
  likePost: likePost,
});

export default rootReducer;
