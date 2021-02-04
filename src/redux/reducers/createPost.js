import { CREATE_POST } from '../types';

const initialState = {
  post: {},
};

const createPost = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        post: action.payload,
        isLoaded: true,
      };

    default:
      return state;
  }
};

export default createPost;
