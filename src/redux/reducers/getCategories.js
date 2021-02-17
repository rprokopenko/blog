import { GET_CATEGORIES } from '../types';

const initialState = {
  categories: [],
};

const getCategories = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
};

export default getCategories;
