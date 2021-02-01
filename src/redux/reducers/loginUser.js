import { LOGIN_USER } from '../types';

const initialState = {
  user: {},
  isLogin: false,
};

const loginUser = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
        isLogin: true,
      };

    default:
      return state;
  }
};

export default loginUser;
