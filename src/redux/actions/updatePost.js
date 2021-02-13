import firebase from '../../firebase/config';
import { UPDATE_POST, SET_LOADED_UPDATE_POST } from '../types';

export const setLoadedUpdatePost = (payload) => ({
  type: SET_LOADED_UPDATE_POST,
  payload,
});

export const updatePost = (postid, postData) => {
  return async function (dispatch) {
    dispatch({ type: SET_LOADED_UPDATE_POST, payload: true });
    const post = await firebase.updatePost(postid, postData).catch((err) => console.log(err));

    if (post) {
      dispatch({ type: UPDATE_POST, payload: post });
      return post;
    }
  };
};
