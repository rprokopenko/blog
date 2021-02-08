import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';

import { closeModal } from '../redux/actions/modal';
import { deletePost } from '../redux/actions/deletePost';

const Modal = () => {
  const { isType, postId, fileRef } = useSelector(({ modal }) => modal.modalProps);

  const history = useHistory();

  const dispatch = useDispatch();

  const deletePostAction = (postId, fileRef) => dispatch(deletePost(postId, fileRef));

  const deleteCurrentPost = async () => {
    await deletePostAction(postId, fileRef);
    history.go(0);
    NotificationManager.success('Post delete!');
  };

  const closeModalAction = () => {
    dispatch(closeModal());
    document.body.classList.remove('modal-open');
  };

  document.body.classList.toggle('modal-open');
  return (
    <div className='modal-overlay' onClick={closeModalAction}>
      <div className='modal'>
        <div className='container'>
          {isType ? <h2>Edit this Post</h2> : <h2>Delete this Post</h2>}
          {isType ? <p>Are you sure you really want to edit this post?</p> : <p>Are you sure you really want to delete this post?</p>}
          <div className='modal__buttons'>
            <button id='cancel' onClick={closeModalAction}>
              Cancel
            </button>
            {isType ? (
              <button id='edit'>Edit</button>
            ) : (
              <button id='delete' onClick={() => deleteCurrentPost()}>
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
