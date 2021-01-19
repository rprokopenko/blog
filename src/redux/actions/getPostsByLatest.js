import firebase from '../../firebase/config';
import { GET_POSTS_BY_LATEST, SET_LOADED } from '../types';

export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload,
});

export const getPostsByLatest = () => {
  return async function (dispatch) {
    dispatch({ type: SET_LOADED, payload: false });
    const postsArray = await firebase.getPostsByLatest();
    dispatch({ type: GET_POSTS_BY_LATEST, payload: postsArray });
  };
};
