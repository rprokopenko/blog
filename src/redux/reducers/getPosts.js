import { GET_POSTS, GET_POSTS_BY_LATEST, GET_POSTS_BY_POPULAR, SET_LOADED } from '../types';

const initialState = {
  posts: [],
  postsByLatest: [],
  postsByPopular: [],
  isLoaded: false,
};

const getPosts = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        isLoaded: true,
      };

    case GET_POSTS_BY_LATEST:
      return {
        ...state,
        postsByLatest: action.payload,
        isLoaded: true,
      };

    case GET_POSTS_BY_POPULAR:
      return {
        ...state,
        postsByPopular: action.payload,
        isLoaded: true,
      };

    case SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};

export default getPosts;
