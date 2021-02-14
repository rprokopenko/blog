import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';

import { createPost } from '../redux/actions/createPost';
import { openModal } from '../redux/actions/modal';
import { getPost } from '../redux/actions/getPost';

import { BackButton, Loader } from '.';

const Form = () => {
  const hiddenFileInput = React.useRef(null);
  const titleRef = React.useRef(null);
  const categoryRef = React.useRef(null);
  const contentRef = React.useRef(null);

  const [cover, setCover] = React.useState('');
  const [stateFile, setStateFile] = React.useState(null);

  const [redirect, setRedirect] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);

  const post = useSelector(({ getPost }) => getPost.post);
  const isLoadedPostFill = useSelector(({ getPost }) => getPost.isLoaded);
  const isLoadedAddPost = useSelector(({ createPost }) => createPost.isLoaded);
  const isLoadedEditPost = useSelector(({ updatePost }) => updatePost.isLoaded);

  const dispatch = useDispatch();
  const getPostAction = (postid) => dispatch(getPost(postid));
  const createPostAction = (post) => dispatch(createPost(post));

  const location = useLocation();
  const history = useHistory();

  React.useEffect(() => {
    if (location.state) {
      setIsEdit(location.state.isEdit);
      getPostAction(location.state.postId);
    } else {
      setIsEdit(false);
    }
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

  //push name from input image to span
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    setStateFile(fileUploaded.name);
    setCover(fileUploaded);
  };
  /////

  const addPost = async (e) => {
    e.preventDefault();

    let post = {
      cover: hiddenFileInput.current.files[0],
      title: titleRef.current.value,
      category: categoryRef.current.value,
      content: contentRef.current.value,
    };

    await createPostAction(post);
    NotificationManager.success('Post create!');

    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to='/admin' />;
  }

  const updateCurrentPost = async (e) => {
    e.preventDefault();
    const postUpdate = {
      title: titleRef.current.value,
      category: categoryRef.current.value,
      content: contentRef.current.value,
    };

    if (cover) {
      postUpdate['cover'] = cover;
      postUpdate['oldcover'] = post.fileRef;
    }

    dispatch(openModal({ modalProps: { isType: true, postId: location.state.postId, postUpdate: postUpdate } }));
  };

  return (
    <>
      {(isEdit ? isLoadedPostFill : isLoadedAddPost) ? (
        <Loader />
      ) : (
        <>
          <BackButton />
          <div className='create-post'>
            <div className='container'>
              {isEdit ? <h3>Edit Post</h3> : <h3>Add new Post</h3>}
              <form onSubmit={isEdit ? updateCurrentPost : addPost}>
                <div id='input__image'>
                  <svg id='image__svg' width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M13.0833 0H1.91675C0.859834 0 0 0.859863 0 1.91678V13.0833C0 14.1401 0.859834 15 1.91675 15H13.0833C14.1402 15 15 14.1401 15 13.0832V1.91678C15 0.859863 14.1402 0 13.0833 0ZM14.1165 13.0833C14.1165 13.653 13.653 14.1165 13.0833 14.1165H1.91675C1.34701 14.1165 0.883506 13.653 0.883506 13.0833V11.4717L3.79137 8.99757C3.89748 8.90728 4.05229 8.90643 4.15939 8.99537L5.9809 10.5079C6.15653 10.6537 6.41435 10.6418 6.57574 10.4802L10.9037 6.14561C10.982 6.06724 11.0732 6.05962 11.1208 6.06205C11.1682 6.06448 11.2583 6.08142 11.3281 6.1674L14.1165 9.6007V13.0833H14.1165ZM14.1165 8.19917L12.0139 5.61032C11.8054 5.35356 11.4964 5.19659 11.166 5.17963C10.8359 5.16293 10.5122 5.28721 10.2785 5.52129L6.23531 9.57073L4.72389 8.31568C4.28563 7.95176 3.65271 7.95554 3.21882 8.32471L0.883506 10.3117V1.91678C0.883506 1.34704 1.34701 0.883535 1.91675 0.883535H13.0833C13.653 0.883535 14.1165 1.34704 14.1165 1.91678V8.19917Z'
                      fill='#555555'
                    />
                    <path
                      d='M4.72206 1.84555C3.5474 1.84555 2.5918 2.80121 2.5918 3.97581C2.5918 5.15044 3.54743 6.10608 4.72206 6.10608C5.89669 6.10608 6.85232 5.15044 6.85232 3.97581C6.85232 2.80119 5.89672 1.84555 4.72206 1.84555ZM4.72206 5.22257C4.03458 5.22257 3.4753 4.66326 3.4753 3.97581C3.4753 3.28833 4.03458 2.72906 4.72206 2.72906C5.40954 2.72906 5.96882 3.28836 5.96882 3.97581C5.96882 4.66326 5.40954 5.22257 4.72206 5.22257Z'
                      fill='#555555'
                    />
                  </svg>

                  <label onClick={handleClick}>Upload image</label>
                  <input type='file' name='image' ref={hiddenFileInput} onChange={handleChange} hidden />
                  <span id='file-chosen'>{isEdit ? (stateFile ? stateFile : post.fileRef) : stateFile ? stateFile : 'No file chosen'}</span>

                  <svg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M18.0256 8.53367C18.4071 8.91514 18.4071 9.5335 18.0256 9.91478L11.4742 16.4663C11.0928 16.8476 10.4746 16.8476 10.0931 16.4663L6.97441 13.3474C6.59294 12.9662 6.59294 12.3478 6.97441 11.9665C7.35569 11.585 7.97405 11.585 8.35533 11.9665L10.7836 14.3948L16.6445 8.53367C17.0259 8.15239 17.6443 8.15239 18.0256 8.53367ZM25 12.5C25 19.4094 19.4084 25 12.5 25C5.59063 25 0 19.4084 0 12.5C0 5.59063 5.59158 0 12.5 0C19.4094 0 25 5.59158 25 12.5ZM23.0469 12.5C23.0469 6.67019 18.329 1.95312 12.5 1.95312C6.67019 1.95312 1.95312 6.67095 1.95312 12.5C1.95312 18.3298 6.67095 23.0469 12.5 23.0469C18.3298 23.0469 23.0469 18.329 23.0469 12.5Z'
                      fill='#1AC05E'
                    />
                  </svg>
                </div>

                <div className='input'>
                  <label htmlFor='title'>Title</label>
                  <div className='input__content'>
                    <input type='text' name='title' ref={titleRef} defaultValue={isEdit ? post.title : null} />
                    <svg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M18.0256 8.53367C18.4071 8.91514 18.4071 9.5335 18.0256 9.91478L11.4742 16.4663C11.0928 16.8476 10.4746 16.8476 10.0931 16.4663L6.97441 13.3474C6.59294 12.9662 6.59294 12.3478 6.97441 11.9665C7.35569 11.585 7.97405 11.585 8.35533 11.9665L10.7836 14.3948L16.6445 8.53367C17.0259 8.15239 17.6443 8.15239 18.0256 8.53367ZM25 12.5C25 19.4094 19.4084 25 12.5 25C5.59063 25 0 19.4084 0 12.5C0 5.59063 5.59158 0 12.5 0C19.4094 0 25 5.59158 25 12.5ZM23.0469 12.5C23.0469 6.67019 18.329 1.95312 12.5 1.95312C6.67019 1.95312 1.95312 6.67095 1.95312 12.5C1.95312 18.3298 6.67095 23.0469 12.5 23.0469C18.3298 23.0469 23.0469 18.329 23.0469 12.5Z'
                        fill='#1AC05E'
                      />
                    </svg>
                  </div>
                </div>

                <div className='input'>
                  <label htmlFor='category'>Category</label>
                  <div className='input__content'>
                    <input type='text' name='category' ref={categoryRef} defaultValue={isEdit ? post.category : null} />
                    <svg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M12.5 0C5.59121 0 0 5.59067 0 12.5C0 19.4088 5.59067 25 12.5 25C19.4088 25 25 19.4093 25 12.5C25 5.59116 19.4093 0 12.5 0ZM12.5 23.0469C6.6707 23.0469 1.95312 18.3297 1.95312 12.5C1.95312 6.67065 6.67026 1.95312 12.5 1.95312C18.3293 1.95312 23.0469 6.67026 23.0469 12.5C23.0469 18.3293 18.3297 23.0469 12.5 23.0469Z'
                        fill='#CC0012'
                      />
                      <path
                        d='M16.7759 15.3956L13.8803 12.5L16.7759 9.60442C17.1572 9.22307 17.1573 8.60476 16.776 8.22336C16.3945 7.84197 15.7762 7.84202 15.3949 8.22336L12.4992 11.119L9.6036 8.22336C9.2223 7.84197 8.60389 7.84197 8.22255 8.22336C7.8412 8.60476 7.8412 9.22307 8.22259 9.60442L11.1182 12.5L8.22259 15.3956C7.8412 15.777 7.84115 16.3953 8.22255 16.7767C8.60404 17.1581 9.22235 17.158 9.6036 16.7767L12.4992 13.8811L15.3949 16.7767C15.7761 17.158 16.3946 17.1581 16.776 16.7767C17.1573 16.3953 17.1573 15.777 16.7759 15.3956Z'
                        fill='#CC0012'
                      />
                    </svg>
                  </div>
                </div>

                <div className='input'>
                  <label htmlFor='text'>Text</label>
                  <div className='input__content'>
                    <textarea
                      name='text'
                      placeholder='Your Text....'
                      ref={contentRef}
                      defaultValue={isEdit ? post.content : null}></textarea>
                    <svg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M18.0256 8.53367C18.4071 8.91514 18.4071 9.5335 18.0256 9.91478L11.4742 16.4663C11.0928 16.8476 10.4746 16.8476 10.0931 16.4663L6.97441 13.3474C6.59294 12.9662 6.59294 12.3478 6.97441 11.9665C7.35569 11.585 7.97405 11.585 8.35533 11.9665L10.7836 14.3948L16.6445 8.53367C17.0259 8.15239 17.6443 8.15239 18.0256 8.53367ZM25 12.5C25 19.4094 19.4084 25 12.5 25C5.59063 25 0 19.4084 0 12.5C0 5.59063 5.59158 0 12.5 0C19.4094 0 25 5.59158 25 12.5ZM23.0469 12.5C23.0469 6.67019 18.329 1.95312 12.5 1.95312C6.67019 1.95312 1.95312 6.67095 1.95312 12.5C1.95312 18.3298 6.67095 23.0469 12.5 23.0469C18.3298 23.0469 23.0469 18.329 23.0469 12.5Z'
                        fill='#1AC05E'
                      />
                    </svg>
                  </div>
                </div>

                <div className='input__buttons'>
                  <input id='cancel' type='reset' value='Cancel' onClick={() => history.goBack()} />
                  <input id='add' type='submit' value={isEdit ? 'Edit' : 'Add'} />
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Form;
