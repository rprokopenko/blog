import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { loginUser } from '..//../redux/actions/loginUser';

import { logIn } from '../../localStorage';

const Login = () => {
  const [redirect, setRedirect] = React.useState(false);

  const dispatch = useDispatch();
  const logInUserAction = (email, password) => dispatch(loginUser(email, password));

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
        .required('Required'),
    }),

    onSubmit: async (values) => {
      let user = await logInUserAction(values.email, values.password);

      if (user) {
        logIn();
        setRedirect(true);
      } else {
        NotificationManager.error('Login Failed');
      }
    },
  });

  if (redirect) {
    return <Redirect to='/admin' />;
  }

  return (
    <div className='login'>
      <div className='container'>
        <h2>Log in Admin Panel</h2>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor='email'>Email:</label>
          {formik.touched.email && formik.errors.email ? <div className='login__error'>{formik.errors.email}</div> : null}
          <input type='email' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />

          <label htmlFor='password'>Password:</label>
          {formik.touched.password && formik.errors.password ? <div className='login__error'>{formik.errors.password}</div> : null}
          <input name='password' type='password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />

          <input type='submit' value='Login' disabled={Object.keys(formik.errors).length !== 0 ? true : false} />
        </form>
      </div>
    </div>
  );
};

export default Login;
