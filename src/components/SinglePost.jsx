import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { getPost } from '../redux/actions/getPost';

import { BackButton, Loader } from '../components';

import likeSvg from '../assets/img/like.svg';
import viewSvg from '../assets/img/view.svg';

const SinglePost = (props) => {
  //const [postid, setPostId] = React.useState('');
  const post = useSelector(({ getPost }) => getPost.post);
  const isLoaded = useSelector(({ getPost }) => getPost.isLoaded);

  const dispatch = useDispatch();

  React.useEffect(() => {
    //setPostId(props.match.params.id);
    dispatch(getPost(props.match.params.id));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const formatedTime = (sec) => {
    const data = moment(sec * 1000).format('DD.MM.YYYY');
    const time = moment(sec * 1000).format('HH:mm');
    return 'Date: ' + data + ' at ' + time;
  };

  return (
    <>
      {isLoaded ? (
        <>
          <BackButton />
          <div className={'single-post'}>
            <div className='single-post__image' style={{ backgroundImage: 'url(' + post.cover + ')' }}></div>
            <div className='single-post__content'>
              <h4 className='single-post__category'>
                <Link to={'/category/' + post.category}>{'# ' + post.category}</Link>
              </h4>
              <h2 className='single-post__title'>{post.title}</h2>
              <h4 className='single-post__date'>{formatedTime(post.time.seconds)}</h4>
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
