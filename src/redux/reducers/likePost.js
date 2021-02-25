import { ADD_LIKE, SET_LIKE_DEFAULT } from '../types';

const initialState = {
  id: null,
  liked: false,
};

const getPost = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIKE:
      return {
        ...state,
        id: action.payload,
        liked: true,
      };

    case SET_LIKE_DEFAULT:
      return {
        initialState,
      };

    default:
      return state;
  }
};

export default getPost;
