import React from 'react';

import { AdminPanel, Header } from '../../components';

const Admin = () => {
  return (
    <>
      <Header />
      <div className='wrapper'>
        <div className='content'>
          <h3 className='title'>Admin Panel</h3>
          <AdminPanel />
        </div>
      </div>
    </>
  );
};

export default Admin;
