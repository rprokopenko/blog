import firebase from '../../firebase/config';
import { DELETE_POST } from '../types';

export const deletePost = (postid, fileref) => {
  return async function (dispatch) {
    const post = await firebase.deletePost(postid, fileref);
    dispatch({ type: DELETE_POST, payload: post });
  };
};
