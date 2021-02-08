import { SHOW_MODAL, HIDE_MODAL } from '../types';

const initialState = {
  isType: false,
  modalProps: { postId: null, fileRef: null },
  isShow: false,
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        modalProps: action.modalProps,
        isShow: true,
      };
    case HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
};

export default modal;
