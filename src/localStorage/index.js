import { NotificationManager } from 'react-notifications';

export const logIn = () => {
  localStorage.setItem('auth', true);
  NotificationManager.success('Login Successful!');
};

export const logOut = () => {
  localStorage.removeItem('auth');
  NotificationManager.success('Logout Successful!');
};

export const updateLikes = (postID) => {
  let array = localStorage.getItem('likes');
  let parsedArray = array ? JSON.parse(array) : [];
  const newArray = [...parsedArray, postID];

  return newArray;
};

export const isLogin = () => {
  if (localStorage.getItem('auth')) {
    return true;
  } else {
    return false;
  }
};
