import React from 'react';
import { BackButton } from '.';

const NotFound = ({ text = '404: Not Found', backButtonType = false }) => {
  return (
    <>
      {backButtonType ? <BackButton /> : ''}
      <div className='no-results'>
        <div className='content'>
          <h2 className='title'>{text}</h2>
        </div>
      </div>
    </>
  );
};

export default NotFound;
