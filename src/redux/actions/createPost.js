import firebase from '../../firebase/config';
import { CREATE_POST, SET_LOADED_CREATE_POST } from '../types';

export const setLoadedcreatePost = (payload) => ({
  type: SET_LOADED_CREATE_POST,
  payload,
});

export const createPost = (post) => {
  return async function (dispatch) {
    dispatch({ type: SET_LOADED_CREATE_POST, payload: true });
    const firestorePost = await firebase.createPost(post);
    dispatch({ type: CREATE_POST, payload: firestorePost });
  };
};
