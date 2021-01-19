import firebase from '../../firebase/config';
import { GET_POSTS } from '../types';

export const getPosts = () => {
  return async function (dispatch) {
    const postsArray = await firebase.getPosts();
    dispatch({ type: GET_POSTS, payload: postsArray });
  };
};
