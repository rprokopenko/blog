import React from 'react';
import { useMediaQuery } from 'react-responsive';

import likeSvg from '../assets/img/like.svg';
import viewSvg from '../assets/img/view.svg';

const Post = ({ cover, category, title, content, likes, views, isFirst = false }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 720px)` });

  return (
    <div className={!isMobile && isFirst ? 'first-post' : 'post'}>
      <div className='post__image' style={{ backgroundImage: 'url(' + cover + ')' }}></div>
      <div className='post__content'>
        <h4 className='post__category'>
          <a href='/'>{'# ' + category}</a>
        </h4>
        <h2 className='post__title'>
          <a href='/'>{title}</a>
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

/*You can pass callbacks to components in different ways. I came from Airbnb's best practices and from my own experience and share
          how to properly throw methods into your comp. You can pass I came from Airbnb's best practicethrow methods into your comp how to
          properly throw methods into your comp. You can pass I came from Airbnb's best practicethrow methods into your comphow to properly
          throw methods into your comp. You can pass I came from Airbnb's best practicethrow methods into your comp*/
