import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const BackButton = () => {
  let history = useHistory();
  return (
    <>
      <h3 className='title'>
        <Link onClick={() => history.goBack()}>Back</Link>
      </h3>
    </>
  );
};

export default BackButton;
