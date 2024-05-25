import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    openLogin: false,
    openRegistration: false,
    openConfirmation: false,
    openCheckEmail: false,
    openResetPassword: false,
    openUserInfo: false,
    openExperience: false,
  },
  reducers: {
    openModal: (state, action) => {
      const { modalName } = action.payload;
      state[modalName] = true;
    },
    closeModal: (state, action) => {
      const { modalName } = action.payload;
      state[modalName] = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
