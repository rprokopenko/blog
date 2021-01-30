import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { loginUser } from '..//../redux/actions/loginUser';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [redirect, setRedirect] = React.useState(false);

  const dispatch = useDispatch();
  const logInUserAction = (email, password) => dispatch(loginUser(email, password));

  const login = async (e) => {
    e.preventDefault();

    if (email !== '' && password !== '') {
      let user = await logInUserAction(email, password);

      if (user) {
        localStorage.setItem('auth', true);
        setRedirect(true);
      } else {
      }
    }
  };

  if (redirect) {
    return <Redirect to='/admin' />;
  }

  return (
    <div className='login'>
      <div className='container'>
        <h2>Log in Admin Panel</h2>
        <form onSubmit={login}>
          <label htmlFor='email'>Email:</label>
          <input type='email' name='email' onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor='password'>Password:</label>
          <input name='password' type='password' onChange={(e) => setPassword(e.target.value)} />
          <input type='submit' value='Login' />
        </form>
      </div>
    </div>
  );
};

export default Login;

export const isLogin = () => {
  if (localStorage.getItem('auth')) return true;
  return false;
};
