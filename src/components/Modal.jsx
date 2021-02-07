import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../redux/actions/modal';

const Modal = () => {
  const { isEditType, isDeleteType, postId } = useSelector(({ modal }) => {
    console.log(modal.modalProps);
    return modal.modalProps;
  });

  const dispatch = useDispatch();

  const closeModalAction = () => {
    dispatch(closeModal());
    document.body.classList.remove('modal-open');
  };

  document.body.classList.toggle('modal-open');
  return (
    <div className='modal-overlay' onClick={closeModalAction}>
      <div className='modal'>
        <div className='container'>
          {isEditType ? <h2>Edit this Post</h2> : <h2>Delete this Post</h2>}
          {isEditType ? <p>Are you sure you really want to edit this post?</p> : <p>Are you sure you really want to delete this post?</p>}
          <div className='modal__buttons'>
            <button id='cancel' onClick={closeModalAction}>
              Cancel
            </button>
            {isEditType ? <button id='edit'>Edit</button> : <button id='delete'>Delete</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
