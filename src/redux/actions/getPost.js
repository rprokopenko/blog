import firebase from '../../firebase/config';
import { GET_POST, SET_LOADED_GET_POST } from '../types';

export const setLoadedGetPost = (payload) => ({
  type: SET_LOADED_GET_POST,
  payload,
});

export const getPost = (postid) => {
  return async function (dispatch) {
    dispatch({ type: SET_LOADED_GET_POST, payload: true });
    const postData = await firebase.getPost(postid);
    dispatch({ type: GET_POST, payload: postData });
  };
};
