import { GET_POSTS_BY_LATEST, SET_LOADED } from '../types';

const initialState = {
  posts: [],
  isLoaded: false,
};

const getPostsByLatest = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_BY_LATEST:
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

export default getPostsByLatest;
