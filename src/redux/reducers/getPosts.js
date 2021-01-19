import { GET_POSTS_BY_CATEGORY, GET_POSTS_BY_LATEST, GET_POSTS_BY_POPULAR, GET_POSTS, SET_LOADED } from '../types';

const initialState = {
  posts: [],
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

    case GET_POSTS_BY_CATEGORY:
      return {
        ...state,
        posts: action.payload,
        isLoaded: true,
      };

    case GET_POSTS_BY_LATEST:
      return {
        ...state,
        posts: action.payload,
        isLoaded: true,
      };

    case GET_POSTS_BY_POPULAR:
      return {
        ...state,
        posts: action.payload,
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
