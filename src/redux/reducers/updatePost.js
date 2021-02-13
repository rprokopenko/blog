import { UPDATE_POST, SET_LOADED_UPDATE_POST } from '../types';

const initialState = {
  post: {},
  isLoaded: false,
};

const updatePost = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_POST:
      return {
        ...state,
        post: action.payload,
        isLoaded: true,
      };

    case SET_LOADED_UPDATE_POST:
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};

export default updatePost;
