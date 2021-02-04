import firebase from '../../firebase/config';
import { GET_POSTS, GET_POSTS_BY_LATEST, GET_POSTS_BY_POPULAR, SET_LOADED } from '../types';

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

export const getPostsByLatests = () => {
  return async function (dispatch) {
    dispatch({ type: SET_LOADED, payload: false });
    const postsArray = await firebase.getPostsByLatest();
    dispatch({ type: GET_POSTS_BY_LATEST, payload: postsArray });
  };
};

export const getPostsByPopular = () => {
  return async function (dispatch) {
    dispatch({ type: SET_LOADED, payload: false });
    const postsArray = await firebase.getPostsByPopular();
    dispatch({ type: GET_POSTS_BY_POPULAR, payload: postsArray });
  };
};
