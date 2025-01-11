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
    workExperience: false,
    modalData: null,
    achievement: false,
    openSpecialization: false,
    openSkillsModal: false,
    openSoftSkillsModal: false,
    scheduleInterview: false,
    feedbackProjectModal: false,
    openNotification: false,
    openConfirmDeleteSpecialization: false,
  },
  reducers: {
    openModal: (state, action) => {
      const { modalName, data } = action.payload;
      state[modalName] = true;
      if (data) {
        state.modalData = data;
      }
    },
    closeModal: (state, action) => {
      const { modalName } = action.payload;
      state[modalName] = false;
      state.modalData = null;
    },
    closeConfirmDeleteModal: (state, action) => {
      const { modalName, data } = action.payload;
      state[modalName] = false;
      if (data) {
        state.modalData = data;
      }
    },
  },
});

export const { openModal, closeModal, closeConfirmDeleteModal } = modalSlice.actions;
export default modalSlice.reducer;
