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
    modalData: null,
    achievement: false,
    openAddSpecialization: false,
    openSkillsModal: false,
  },
  reducers: {
    openModal: (state, action) => {
      const { modalName, data } = action.payload;
      state[modalName] = true;
      if (data) {
        state.modalData = data; // Store the data when the modal is opened
      }
    },
    closeModal: (state, action) => {
      const { modalName } = action.payload;
      state[modalName] = false;
      state.modalData = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
