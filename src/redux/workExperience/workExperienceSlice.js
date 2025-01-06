import { createSlice } from '@reduxjs/toolkit';

const workExperienceSlice = createSlice({
  name: 'workExperience',
  initialState: {
    dataToEdit: null,
  },
  reducers: {
    setWorkExperienceDataToEdit: (state, { payload }) => {
      state.dataToEdit = payload;
    },
    clearWorkExperienceDataToEdit: (state) => {
      state.dataToEdit = null;
    },
  },
  selectors: {
    selectWorkExperienceDataToEdit: (state) => state.dataToEdit,
  },
});

export const { setWorkExperienceDataToEdit, clearWorkExperienceDataToEdit } = workExperienceSlice.actions;

export const { selectWorkExperienceDataToEdit } = workExperienceSlice.selectors;
export default workExperienceSlice.reducer;
