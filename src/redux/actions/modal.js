import { HIDE_MODAL, SHOW_MODAL } from '../types';

export const openModal = (modalParams) => {
  return {
    type: SHOW_MODAL,
    ...modalParams,
  };
};

export const closeModal = () => {
  return {
    type: HIDE_MODAL,
  };
};
