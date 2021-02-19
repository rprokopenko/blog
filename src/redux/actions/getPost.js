import firebase from '../../firebase/config';
import { GET_POST, SET_LOADED_GET_POST } from '../types';

export const setLoadedGetPost = (payload) => ({
  type: SET_LOADED_GET_POST,
  payload,
});

export const getPost = (postid, isLike) => {
  return async function (dispatch) {
    dispatch({ type: SET_LOADED_GET_POST, payload: true });
    const postData = await firebase.getPost(postid, isLike);
    dispatch({ type: GET_POST, payload: postData });
  };
};
