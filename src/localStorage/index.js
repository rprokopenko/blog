import { NotificationManager } from 'react-notifications';

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
