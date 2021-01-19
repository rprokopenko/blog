import firebase from '../../firebase/config';
import { GET_POSTS_BY_CATEGORY, SET_LOADED } from '../types';

export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload,
});

export const getPostsByCategory = (categoryName) => {
  return async function (dispatch) {
    dispatch({ type: SET_LOADED, payload: false });
    const postsArray = await firebase.getPostsByCategory(categoryName);
    dispatch({ type: GET_POSTS_BY_CATEGORY, payload: postsArray });
  };
};
