import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { isLogin } from '../localStorage';
import { deletePost } from '../redux/actions/deletePost';

import likeSvg from '../assets/img/like.svg';
import viewSvg from '../assets/img/view.svg';

const Post = ({ id, cover, fileRef, category, title, content, likes, views, isFirst = false }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 720px)` });

  const history = useHistory();

  const dispatch = useDispatch();
  const deletePostAction = (id, fileRef) => dispatch(deletePost(id, fileRef));

  const deleteCurrentPost = async () => {
    await deletePostAction(id, fileRef);
    history.go(0);
  };

  return (
    <div className={!isMobile && isFirst ? 'first-post' : 'post'}>
      <div className='post__image' style={{ backgroundImage: 'url(' + cover + ')' }}></div>
      <div className='post__content'>
        <div className='post__category'>
          <h4>
            <Link to={'/category/' + category}>{'# ' + category}</Link>
          </h4>
          <div style={isLogin() ? { display: 'block' } : { display: 'none' }}>
            <button id='button__edit'>Edit</button>
            <button id='button__delete' onClick={(e) => deleteCurrentPost()}>
              Delete
            </button>
          </div>
        </div>

        <h2 className='post__title'>
          <Link to={'/post/' + id}>{title}</Link>
        </h2>
        <p className='post__text'>{content}</p>
        <div className='post__footer'>
          <div className='likes'>
            <img src={likeSvg} alt='like' />
            <p>{likes}</p>
          </div>
          <div className='views'>
            <img src={viewSvg} alt='view' />
            <p>{views}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
