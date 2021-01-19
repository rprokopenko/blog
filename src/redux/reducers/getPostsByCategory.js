import { GET_POSTS_BY_CATEGORY, SET_LOADED } from '../types';

const initialState = {
  posts: [],
  isLoaded: false,
};

const getPostsByCategory = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_BY_CATEGORY:
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

export default getPostsByCategory;
