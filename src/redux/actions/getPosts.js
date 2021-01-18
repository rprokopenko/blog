import firebase from '../../firebase/config';

export const getPosts = () => {
  return async function (dispatch) {
    const postsArray = await firebase.getPosts();
    dispatch({ type: 'GET_POSTS', payload: postsArray });
  };
};
