import { GET_POSTS } from '../types';

const initialState = {
  posts: [],
};

const getPosts = (state = initialState, action) => {
  if (action.type === GET_POSTS) {
    state = { ...state, posts: action.payload };
  }
  return state;
};

export default getPosts;
