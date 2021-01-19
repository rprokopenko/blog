import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Post } from '../components';
import { getPosts } from '../redux/actions/getPosts';

const Main = () => {
  let { categoryName, advice, notes } = useParams();

  const posts = useSelector(({ getPosts }) => getPosts.posts);
  const isLoaded = useSelector(({ getPosts }) => getPosts.isLoaded);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPosts(categoryName || advice || notes));
  }, [categoryName || advice || notes]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <h3 className='title'>{categoryName || advice || notes}</h3>
      <div className='two-post'>
        {isLoaded ? (
          posts.length === 0 ? (
            <div className='no-results'>
              <div className='content'>
                <h2 className='title'>No posts</h2>
              </div>
            </div>
          ) : (
            posts.map((post) => {
              return <Post key={post.id} {...post.data} />;
            })
          )
        ) : (
          <div className='lds-ring'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Main;
