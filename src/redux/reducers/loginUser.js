import { LOGIN_USER, SET_LOADED } from '../types';

const initialState = {
  user: {},
  isLoaded: false,
};

const loginUser = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
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

export default loginUser;
