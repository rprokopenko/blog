import React from 'react';
import { message } from 'antd';
import { useDispatch } from 'react-redux';

import { loginUser } from '..//../redux/actions/loginUser';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const dispatch = useDispatch();
  const logInUserAction = (email, password) => dispatch(loginUser(email, password));

  const login = async (e) => {
    e.preventDefault();

    if (email !== '' && password !== '') {
      let user = await logInUserAction(email, password);

      /*
      //validation this
      if (user) {
        message.success('Login Success');
      }
       } else {
      message.error('Login Failed');
      }*/
    }
  };

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
