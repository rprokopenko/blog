import firebase from '../../firebase/config';
import { GET_CATEGORIES } from '../types';

export const getCategories = () => {
  return async function (dispatch) {
    const categoriesArray = await firebase.getCategories();
    dispatch({ type: GET_CATEGORIES, payload: categoriesArray });
  };
};
