import { combineReducers } from 'redux';

import getPosts from './getPosts';

const rootReducer = combineReducers({
  getPosts: getPosts,
});

export default rootReducer;
