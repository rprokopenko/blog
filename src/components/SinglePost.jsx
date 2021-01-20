import React from 'react';
import { Link } from 'react-router-dom';

import likeSvg from '../assets/img/like.svg';
import viewSvg from '../assets/img/view.svg';

const SinglePost = () => {
  return (
    <>
      <h3 className='title'>
        <Link to='/'>Back</Link>
      </h3>
      <div className={'single-post'}>
        <div
          className='single-post__image'
          style={{
            backgroundImage:
              'url(https://firebasestorage.googleapis.com/v0/b/react-redux-firebase-train.appspot.com/o/%D0%91%D0%B5%D0%B7%20%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-2.jpg?alt=media&token=9d66892d-fb86-4ed7-9110-702ca5f6bc05)',
          }}></div>
        <div className='single-post__content'>
          <h4 className='single-post__category'>
            <Link to={'/'}># ReactJS</Link>
          </h4>
          <h2 className='single-post__title'>
            <a href='/'>ReactJSTips: Anonymous Function</a>
          </h2>
          <h4 className='single-post__date'>Date: 05.12.2019 at 11:14</h4>
          <p className='single-post__text'>
            At work, it was required to file a task to automatically determine the city when placing an order. It was decided to do it at
            the front, because the Bek was busy.
            <br />
            <br /> As you know, the front does not know how to determine IP and city. In the first case, he will not be able to get an IP
            without a backup, in the second case, he needs to set permission to determine the user's geolocation, where a raging window pops
            up asking for permission. <br />
            <br />
            The method is crutch, but working (by 80%). Why 80%? The fact is that it is almost impossible to accurately determine the user's
            city and services can be wrong. For example, I live in the city of Nazran, and I am given by the city of Sunzha (~ 30 km. From
            my city).
          </p>
          <div className='single-post__footer'>
            <div className='likes'>
              <img src={likeSvg} alt='like' />
              <p>168</p>
            </div>
            <div className='views'>
              <img src={viewSvg} alt='view' />
              <p>12 680</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
