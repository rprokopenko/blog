import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getPostsByCategory } from '../redux/actions/getPostsByCategory';
import { Post, Loader } from '../components';

const Main = () => {
  let { categoryName } = useParams();

  const posts = useSelector(({ getPostsByCategory }) => getPostsByCategory.posts);
  const isLoaded = useSelector(({ getPostsByCategory }) => getPostsByCategory.isLoaded);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPostsByCategory(categoryName));
  }, [categoryName]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <h3 className='title'>{categoryName}</h3>
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
          <Loader />
        )}
      </div>
    </>
  );
};

export default Main;
