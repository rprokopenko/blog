import firebase from '../../firebase/config';
import { GET_POSTS_BY_POPULAR, SET_LOADED } from '../types';

export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload,
});

export const getPostsByPopular = () => {
  return async function (dispatch) {
    dispatch({ type: SET_LOADED, payload: false });
    const postsArray = await firebase.getPostsByPopular();
    dispatch({ type: GET_POSTS_BY_POPULAR, payload: postsArray });
  };
};
