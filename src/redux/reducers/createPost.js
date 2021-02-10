import { CREATE_POST, SET_LOADED_CREATE_POST } from '../types';

const initialState = {
  post: {},
  isLoaded: false,
};

const createPost = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        post: action.payload,
        isLoaded: true,
      };
    case SET_LOADED_CREATE_POST:
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};

export default createPost;
