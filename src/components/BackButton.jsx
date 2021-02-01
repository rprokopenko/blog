import React from 'react';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
  let history = useHistory();
  return (
    <>
      <h3 className='title'>
        <button onClick={() => history.goBack()}>Back</button>
      </h3>
    </>
  );
};

export default BackButton;
