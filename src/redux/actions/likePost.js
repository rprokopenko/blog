import firebase from '../../firebase/config';
import { ADD_LIKE, SET_LIKE_DEFAULT } from '../types';

export const likePost = (postid) => {
  return async function (dispatch) {
    dispatch({ type: SET_LIKE_DEFAULT });
    await firebase.setLikePost(postid);
    dispatch({ type: ADD_LIKE });
  };
};
