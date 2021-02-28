import { NotificationManager } from 'react-notifications';

//Save Login for admin
export const logIn = () => {
  localStorage.setItem('auth', true);
  NotificationManager.success('Login Successful!');
};

export const logOut = () => {
  localStorage.removeItem('auth');
  NotificationManager.success('Logout Successful!');
};

export const isLogin = () => {
  if (localStorage.getItem('auth')) {
    return true;
  } else {
    return false;
  }
};

//Update likes for post
export const updateLikes = (postID) => {
  let array = localStorage.getItem('likes');
  let parsedArray = array ? JSON.parse(array) : [];
  const newArray = [...parsedArray, postID];

  return newArray;
};

export const setLikes = (likedPost) => {
  localStorage.setItem('likes', JSON.stringify(likedPost));
};
