import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getPost } from '../redux/actions/getPost';

import { Loader } from '../components';

import likeSvg from '../assets/img/like.svg';
import viewSvg from '../assets/img/view.svg';

const SinglePost = (props) => {
  const [postid, setPostId] = React.useState('');
  const post = useSelector(({ getPost }) => getPost.post);
  const isLoaded = useSelector(({ getPost }) => getPost.isLoaded);

  const dispatch = useDispatch();

  React.useEffect(() => {
    setPostId(props.match.params.id);
    dispatch(getPost(props.match.params.id));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {isLoaded ? (
        <>
          <h3 className='title'>
            <Link to='/'>Back</Link>
          </h3>
          <div className={'single-post'}>
            <div className='single-post__image' style={{ backgroundImage: 'url(' + post.cover + ')' }}></div>
            <div className='single-post__content'>
              <h4 className='single-post__category'>
                <Link to={'/'}>{'# ' + post.category}</Link>
              </h4>
              <h2 className='single-post__title'>
                <a href='/'>{post.title}</a>
              </h2>
              <h4 className='single-post__date'>Date: 05.12.2019 at 11:14</h4>
              <p className='single-post__text'>{post.content}</p>
              <div className='single-post__footer'>
                <div className='likes'>
                  <img src={likeSvg} alt='like' />
                  <p>{post.likes}</p>
                </div>
                <div className='views'>
                  <img src={viewSvg} alt='view' />
                  <p>{post.views}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default SinglePost;
