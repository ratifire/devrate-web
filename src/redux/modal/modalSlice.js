import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    modalType: null,
    isOpen: false,
    data: null,
  },
  reducers: {
    openModal: (state, { payload }) => {
      state.modalType = payload.modalType;
      state.isOpen = true;
      state.data = payload.data;
    },
    closeModal: (state) => {
      state.modalType = null;
      state.isOpen = false;
      state.data = null;
    },
  },
  selectors: {
    selectModalData: (state) => state.data,
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const { selectModalData } = modalSlice.selectors;
export default modalSlice.reducer;
