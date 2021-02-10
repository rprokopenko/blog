import firebase from '../../firebase/config';
import { CREATE_POST, SET_LOADED } from '../types';

export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload,
});

export const createPost = (post) => {
  return async function (dispatch) {
    dispatch({ type: SET_LOADED, payload: false });
    const firestorePost = await firebase.createPost(post);
    dispatch({ type: CREATE_POST, payload: firestorePost });
  };
};
