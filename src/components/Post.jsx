import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { isLogin } from '../localStorage';
import { openModal } from '../redux/actions/modal';

const Post = ({ id, cover, fileRef, category, title, content, likes, views, isFirst = false }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 720px)` });

  const dispatch = useDispatch();

  const deletePost = () => {
    dispatch(openModal({ isType: false, modalProps: { postId: id, fileRef: fileRef } }));
  };

  return (
    <>
      <div className={!isMobile && isFirst ? 'first-post' : 'post'}>
        <div className='post__image' style={{ backgroundImage: 'url(' + cover + ')' }}></div>
        <div className='post__content'>
          <div className='post__category'>
            <h4>
              <Link to={'/category/' + category}>{'# ' + category}</Link>
            </h4>
            <div style={isLogin() ? { display: 'block' } : { display: 'none' }}>
              <button id='button__edit'>Edit</button>
              <button id='button__delete' onClick={(e) => deletePost()}>
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
              <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M9.99998 18.8873C9.71525 18.8873 9.44075 18.7842 9.22682 18.5968C8.41887 17.8903 7.63991 17.2264 6.95265 16.6408L6.94914 16.6377C4.93423 14.9207 3.19427 13.4378 1.98364 11.9771C0.630339 10.3441 0 8.79578 0 7.10434C0 5.46097 0.563506 3.94485 1.58661 2.83508C2.62191 1.71219 4.0425 1.09375 5.58715 1.09375C6.74163 1.09375 7.7989 1.45874 8.72954 2.1785C9.1992 2.54181 9.62492 2.98645 9.99998 3.5051C10.3752 2.98645 10.8008 2.54181 11.2706 2.1785C12.2012 1.45874 13.2585 1.09375 14.413 1.09375C15.9575 1.09375 17.3782 1.71219 18.4135 2.83508C19.4366 3.94485 20 5.46097 20 7.10434C20 8.79578 19.3698 10.3441 18.0165 11.9769C16.8058 13.4378 15.066 14.9205 13.0514 16.6374C12.363 17.224 11.5828 17.8889 10.773 18.5971C10.5592 18.7842 10.2846 18.8873 9.99998 18.8873ZM5.58715 2.26532C4.37362 2.26532 3.25881 2.74963 2.44781 3.62915C1.62475 4.52194 1.17141 5.75607 1.17141 7.10434C1.17141 8.52692 1.70013 9.79919 2.88558 11.2296C4.03136 12.6122 5.73562 14.0645 7.70888 15.7462L7.71254 15.7492C8.40239 16.3371 9.1844 17.0036 9.9983 17.7153C10.8171 17.0023 11.6003 16.3347 12.2915 15.7458C14.2647 14.0642 15.9688 12.6122 17.1145 11.2296C18.2998 9.79919 18.8285 8.52692 18.8285 7.10434C18.8285 5.75607 18.3752 4.52194 17.5522 3.62915C16.7413 2.74963 15.6263 2.26532 14.413 2.26532C13.524 2.26532 12.7078 2.54791 11.9871 3.10516C11.3449 3.60199 10.8975 4.23004 10.6352 4.66949C10.5003 4.89548 10.2629 5.03036 9.99998 5.03036C9.73707 5.03036 9.49965 4.89548 9.36476 4.66949C9.10261 4.23004 8.65523 3.60199 8.01283 3.10516C7.29216 2.54791 6.47597 2.26532 5.58715 2.26532Z'
                  fill='#202020'
                />
              </svg>
              <p>{likes}</p>
            </div>
            <div className='views'>
              <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <g clipPath='url(#clip0)'>
                  <path
                    d='M10 4.03906C6.17879 4.03906 2.71351 6.12968 0.15649 9.52541C-0.0521632 9.80361 -0.0521632 10.1923 0.15649 10.4705C2.71351 13.8703 6.17879 15.9609 10 15.9609C13.8212 15.9609 17.2865 13.8703 19.8435 10.4746C20.0522 10.1964 20.0522 9.8077 19.8435 9.5295C17.2865 6.12968 13.8212 4.03906 10 4.03906ZM10.2741 14.1976C7.73755 14.3572 5.64284 12.2665 5.80239 9.72588C5.93331 7.63117 7.63118 5.9333 9.72589 5.80238C12.2625 5.64283 14.3572 7.73345 14.1976 10.2741C14.0626 12.3647 12.3647 14.0626 10.2741 14.1976ZM10.1473 12.2584C8.78081 12.3443 7.65163 11.2192 7.74164 9.85271C7.81119 8.72353 8.72763 7.81118 9.85681 7.73754C11.2233 7.65162 12.3525 8.77671 12.2625 10.1432C12.1888 11.2765 11.2724 12.1888 10.1473 12.2584Z'
                    fill='#202020'
                  />
                </g>
                <defs>
                  <clipPath id='clip0'>
                    <rect width='20' height='20' fill='white' />
                  </clipPath>
                </defs>
              </svg>
              <p>{views}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
