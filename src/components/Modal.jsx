import React from 'react';

const Modal = () => {
  return (
    <div className='modal'>
      <div className='container'>
        <h2>Delete this Post</h2>
        <p>Are you sure you really want to delete this post?</p>
        <div className='modal__buttons'>
          <button id='cancel'>Cancel</button>
          <button id='delete'>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
