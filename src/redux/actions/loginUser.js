import firebase from '../../firebase/config';
import { LOGIN_USER } from '../types';

export const loginUser = (email, password) => {
  return async function (dispatch) {
    const user = await firebase.loginUser(email, password).catch((err) => console.log(err));

    if (user) {
      dispatch({ type: LOGIN_USER, payload: user });
      return user;
    }
  };
};
