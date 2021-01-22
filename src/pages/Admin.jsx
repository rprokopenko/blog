import React from 'react';

const Admin = () => {
  return (
    <div className='login'>
      <div className='container'>
        <h2>Log in Admin Panel</h2>
        <form>
          <label htmlFor='email'>Email:</label>
          <input type='email' name='email' />
          <label htmlFor='password'>Password:</label>
          <input name='password' type='password' />
          <input type='submit' value='Login' />
        </form>
      </div>
    </div>
  );
};

export default Admin;
