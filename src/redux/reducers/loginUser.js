import { LOGIN_USER, SET_LOADED } from '../types';

const initialState = {
  user: {},
  isLogin: false,
  isLoaded: false,
};

const loginUser = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
        isLogin: true,
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
