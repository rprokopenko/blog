import { GET_POST, SET_LOADED } from '../types';

const initialState = {
  posts: {},
  isLoaded: false,
};

const getPost = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
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

export default getPost;
