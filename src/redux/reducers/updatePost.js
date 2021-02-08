import { UPDATE_POST } from '../types';

const initialState = {
  post: {},
};

const updatePost = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_POST:
      return {
        ...state,
        post: action.payload,
        isLoaded: true,
      };

    default:
      return state;
  }
};

export default updatePost;
