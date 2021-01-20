import firebase from '../../firebase/config';
import { GET_POSTS, SET_LOADED } from '../types';

export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload,
});

export const getPosts = () => {
  return async function (dispatch) {
    dispatch({ type: SET_LOADED, payload: false });
    const postsArray = await firebase.getPosts();
    dispatch({ type: GET_POSTS, payload: postsArray });
  };
};
