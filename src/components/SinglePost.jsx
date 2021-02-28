import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import moment from 'moment';

import { getPost } from '../redux/actions/getPost';
import { openModal } from '../redux/actions/modal';
import { likePost } from '../redux/actions/likePost';
import { isLogin, setLikes, updateLikes } from '../localStorage';

import { BackButton, Loader } from '../components';

const SinglePost = (props) => {
  const post = useSelector(({ getPost }) => getPost.post);
  const isLoaded = useSelector(({ getPost }) => getPost.isLoaded);

  const [likeCount, setLikeCount] = React.useState(null);
  const [likedPost, setLikedPost] = React.useState(JSON.parse(localStorage.getItem('likes')) || []);

  const dispatch = useDispatch();

  const history = useHistory();

  React.useEffect(() => {
    dispatch(getPost(props.match.params.id));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const deletePost = () => {
    dispatch(openModal({ isType: false, modalProps: { postId: props.match.params.id, fileRef: post.fileRef } }));
  };

  const formatedTime = (sec) => {
    const data = moment(sec * 1000).format('DD.MM.YYYY');
    const time = moment(sec * 1000).format('HH:mm');
    return 'Date: ' + data + ' at ' + time;
  };

  const addLikePost = (postID, postlikes) => {
    setLikedPost(updateLikes(postID));
    setLikeCount(null);
    setLikeCount(postlikes);

    dispatch(likePost(postID));
  };

  setLikes(likedPost);

  const checkIfPostIsAlreadyLiked = () => {
    if (likedPost.includes(props.match.params.id)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      {isLoaded ? (
        <Loader />
      ) : (
        <>
          <BackButton />
          <div className={'single-post'}>
            <div className='single-post__image' style={{ backgroundImage: 'url(' + post.cover + ')' }}></div>
            <div className='single-post__content'>
              <div className='single-post__category'>
                <Link to={'/category/' + post.category}>{'# ' + post.category}</Link>

                <div style={isLogin() ? { display: 'block' } : { display: 'none' }}>
                  <button
                    id='button__edit'
                    onClick={() => {
                      history.push({ pathname: '/admin/edit-post', state: { postId: props.match.params.id, isEdit: true } });
                    }}>
                    Edit
                  </button>
                  <button id='button__delete' onClick={() => deletePost()}>
                    Delete
                  </button>
                </div>
              </div>

              <h2 className='single-post__title'>{post.title}</h2>
              <h4 className='single-post__date'>{formatedTime(post.time.seconds)}</h4>
              <p className='single-post__text'>{post.content}</p>
              <div className='single-post__footer'>
                <div className='likes'>
                  {checkIfPostIsAlreadyLiked() ? (
                    <svg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M12.5 23.6092C12.1441 23.6092 11.8009 23.4802 11.5335 23.246C10.5236 22.3629 9.54989 21.533 8.69082 20.801L8.68643 20.7972C6.16778 18.6508 3.99284 16.7973 2.47955 14.9714C0.787924 12.9301 0 10.9947 0 8.88042C0 6.82621 0.704383 4.93107 1.98326 3.54385C3.27739 2.14024 5.05313 1.36719 6.98393 1.36719C8.42703 1.36719 9.74863 1.82343 10.9119 2.72312C11.499 3.17726 12.0312 3.73306 12.5 4.38137C12.969 3.73306 13.501 3.17726 14.0882 2.72312C15.2515 1.82343 16.5731 1.36719 18.0162 1.36719C19.9468 1.36719 21.7228 2.14024 23.0169 3.54385C24.2958 4.93107 25 6.82621 25 8.88042C25 10.9947 24.2122 12.9301 22.5206 14.9712C21.0073 16.7973 18.8326 18.6506 16.3143 20.7968C15.4537 21.53 14.4785 22.3612 13.4662 23.2464C13.199 23.4802 12.8557 23.6092 12.5 23.6092V23.6092ZM6.98393 2.83165C5.46702 2.83165 4.07352 3.43704 3.05976 4.53644C2.03094 5.65243 1.46427 7.19509 1.46427 8.88042C1.46427 10.6586 2.12516 12.249 3.60698 14.0369C5.03921 15.7652 7.16952 17.5806 9.6361 19.6827L9.64068 19.6865C10.503 20.4214 11.4805 21.2545 12.4979 22.1441C13.5214 21.2528 14.5004 20.4184 15.3644 19.6823C17.8308 17.5802 19.9609 15.7652 21.3932 14.0369C22.8748 12.249 23.5357 10.6586 23.5357 8.88042C23.5357 7.19509 22.969 5.65243 21.9402 4.53644C20.9266 3.43704 19.5329 2.83165 18.0162 2.83165C16.905 2.83165 15.8848 3.18489 14.9839 3.88145C14.1811 4.50249 13.6219 5.28755 13.294 5.83687C13.1254 6.11935 12.8286 6.28796 12.5 6.28796C12.1713 6.28796 11.8746 6.11935 11.7059 5.83687C11.3783 5.28755 10.819 4.50249 10.016 3.88145C9.1152 3.18489 8.09496 2.83165 6.98393 2.83165V2.83165Z'
                        fill='#FF6868'
                      />
                      <g clipPath='url(#clip0)'>
                        <path
                          d='M23.0167 3.54385C21.7226 2.14024 19.9469 1.36719 18.0162 1.36719C16.5731 1.36719 15.2515 1.82343 14.0881 2.72312C13.501 3.17726 12.969 3.73287 12.5 4.38137C12.0312 3.73306 11.499 3.17726 10.9118 2.72312C9.74846 1.82343 8.42686 1.36719 6.98376 1.36719C5.05314 1.36719 3.27721 2.14024 1.98307 3.54385C0.704384 4.93107 0 6.82621 0 8.88042C0 10.9947 0.787926 12.9301 2.47955 14.9714C3.99284 16.7973 6.16779 18.6508 8.68645 20.7972C9.54647 21.5302 10.5213 22.361 11.5335 23.246C11.801 23.4802 12.1441 23.6092 12.5 23.6092C12.8557 23.6092 13.199 23.4802 13.4661 23.2464C14.4783 22.3612 15.4537 21.53 16.3141 20.7966C18.8324 18.6506 21.0073 16.7973 22.5206 14.9712C24.2123 12.9301 25 10.9947 25 8.88023C25 6.82621 24.2956 4.93107 23.0167 3.54385Z'
                          fill='#FF6868'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0'>
                          <rect width='25' height='25' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                  ) : (
                    <svg
                      onClick={() => addLikePost(props.match.params.id, post.likes)}
                      width='25'
                      height='25'
                      viewBox='0 0 25 25'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M12.5 23.6092C12.1441 23.6092 11.8009 23.4802 11.5335 23.246C10.5236 22.3629 9.54989 21.533 8.69082 20.801L8.68643 20.7972C6.16778 18.6508 3.99284 16.7973 2.47955 14.9714C0.787924 12.9301 0 10.9947 0 8.88042C0 6.82621 0.704383 4.93107 1.98326 3.54385C3.27739 2.14024 5.05313 1.36719 6.98393 1.36719C8.42703 1.36719 9.74863 1.82343 10.9119 2.72312C11.499 3.17726 12.0312 3.73306 12.5 4.38137C12.969 3.73306 13.501 3.17726 14.0882 2.72312C15.2515 1.82343 16.5731 1.36719 18.0162 1.36719C19.9468 1.36719 21.7228 2.14024 23.0169 3.54385C24.2958 4.93107 25 6.82621 25 8.88042C25 10.9947 24.2122 12.9301 22.5206 14.9712C21.0073 16.7973 18.8326 18.6506 16.3143 20.7968C15.4537 21.53 14.4785 22.3612 13.4662 23.2464C13.199 23.4802 12.8557 23.6092 12.5 23.6092V23.6092ZM6.98393 2.83165C5.46702 2.83165 4.07352 3.43704 3.05976 4.53644C2.03094 5.65243 1.46427 7.19509 1.46427 8.88042C1.46427 10.6586 2.12516 12.249 3.60698 14.0369C5.03921 15.7652 7.16952 17.5806 9.6361 19.6827L9.64068 19.6865C10.503 20.4214 11.4805 21.2545 12.4979 22.1441C13.5214 21.2528 14.5004 20.4184 15.3644 19.6823C17.8308 17.5802 19.9609 15.7652 21.3932 14.0369C22.8748 12.249 23.5357 10.6586 23.5357 8.88042C23.5357 7.19509 22.969 5.65243 21.9402 4.53644C20.9266 3.43704 19.5329 2.83165 18.0162 2.83165C16.905 2.83165 15.8848 3.18489 14.9839 3.88145C14.1811 4.50249 13.6219 5.28755 13.294 5.83687C13.1254 6.11935 12.8286 6.28796 12.5 6.28796C12.1713 6.28796 11.8746 6.11935 11.7059 5.83687C11.3783 5.28755 10.819 4.50249 10.016 3.88145C9.1152 3.18489 8.09496 2.83165 6.98393 2.83165V2.83165Z'
                        fill='#202020'
                      />
                    </svg>
                  )}

                  <p>{likeCount === null ? post.likes : likeCount + 1}</p>
                </div>
                <div className='views'>
                  <svg id='svg__views' width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g clipPath='url(#clip0)'>
                      <path
                        d='M12.5 5.04883C7.72348 5.04883 3.39189 7.6621 0.195612 11.9068C-0.0652041 12.2545 -0.0652041 12.7403 0.195612 13.0881C3.39189 17.3379 7.72348 19.9511 12.5 19.9511C17.2765 19.9511 21.6081 17.3379 24.8044 13.0932C25.0652 12.7455 25.0652 12.2596 24.8044 11.9119C21.6081 7.6621 17.2765 5.04883 12.5 5.04883ZM12.8426 17.747C9.67193 17.9464 7.05354 15.3332 7.25299 12.1573C7.41664 9.53896 9.53897 7.41663 12.1574 7.25298C15.3281 7.05353 17.9465 9.66681 17.747 12.8426C17.5782 15.4559 15.4559 17.5782 12.8426 17.747ZM12.6841 15.3229C10.976 15.4303 9.56454 14.024 9.67705 12.3159C9.76399 10.9044 10.9095 9.76398 12.321 9.67192C14.0291 9.56453 15.4406 10.9709 15.3281 12.679C15.236 14.0956 14.0905 15.236 12.6841 15.3229Z'
                        fill='#202020'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0'>
                        <rect width='25' height='25' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>

                  <p>{post.views}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SinglePost;
