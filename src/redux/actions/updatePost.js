import firebase from '../../firebase/config';
import { UPDATE_POST } from '../types';

export const updatePost = (postid, postData) => {
  return async function (dispatch) {
    const post = await firebase.updatePost(postid, postData).catch((err) => console.log(err));

    if (post) {
      dispatch({ type: UPDATE_POST, payload: post });
      return post;
    } else {
      console.log('error ocurred');
    }
  };
};
