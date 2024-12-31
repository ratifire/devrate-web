import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalType: null,
    isOpen: false,
  },
  reducers: {
    openModal: (state, { payload }) => {
      state.modalType = payload;
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.modalType = null;
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
