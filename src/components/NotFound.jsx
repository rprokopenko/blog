import React from 'react';
import { BackButton } from '.';

const NotFound = () => {
  return (
    <>
      <BackButton />
      <div className='no-results'>
        <div className='content'>
          <h2 className='title'>404: Not Found</h2>
        </div>
      </div>
    </>
  );
};

export default NotFound;
