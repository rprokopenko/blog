import { DELETE_POST } from '../types';

const initialState = {
  post: {},
};

const deletePost = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_POST:
      return {
        ...state,
        post: action.payload,
        isLoaded: true,
      };

    default:
      return state;
  }
};

export default deletePost;
