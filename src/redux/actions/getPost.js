import firebase from '../../firebase/config';
import { GET_POST, SET_LOADED } from '../types';

export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload,
});

export const getPost = (postid) => {
  return async function (dispatch) {
    const postData = await firebase.getPost(postid);
    dispatch({ type: GET_POST, payload: postData });
  };
};
