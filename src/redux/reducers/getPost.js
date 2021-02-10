import { GET_POST, SET_LOADED } from '../types';

const initialState = {
  post: {},
  isLoaded: true,
};

const getPost = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        post: action.payload,
        isLoaded: false,
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
