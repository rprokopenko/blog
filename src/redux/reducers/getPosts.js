import {
  GET_POSTS,
  GET_POSTS_BY_LATEST,
  GET_POSTS_BY_POPULAR,
  SET_LOADED,
  SET_LOADED_POSTS_BY_LATEST,
  SET_LOADED_POSTS_BY_POPULAR,
} from '../types';

const initialState = {
  posts: [],
  postsByLatest: [],
  postsByPopular: [],
  isLoaded: false,
  isLoadedByLatest: false,
  isLoadedByPopular: false,
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
        isLoadedByLatest: true,
      };

    case GET_POSTS_BY_POPULAR:
      return {
        ...state,
        postsByPopular: action.payload,
        isLoadedByPopular: true,
      };

    case SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };

    case SET_LOADED_POSTS_BY_LATEST:
      return {
        ...state,
        isLoadedByLatest: action.payload,
      };

    case SET_LOADED_POSTS_BY_POPULAR:
      return {
        ...state,
        isLoadedByPopular: action.payload,
      };

    default:
      return state;
  }
};

export default getPosts;
