import { createSlice } from '@reduxjs/toolkit';

const educationSlice = createSlice({
  name: 'education',
  initialState: {
    dataToEdit: null,
  },
  reducers: {
    setEducationDataToEdit: (state, action) => {
      state.dataToEdit = action.payload;
    }
  },
  selectors: {
    selectEducationDataToEdit: state => state.dataToEdit,
  }
});
export const educationReducer = educationSlice.reducer;

export const {
  setEducationDataToEdit,
} = educationSlice.actions;

export const {
  selectEducationDataToEdit,
} = educationSlice.selectors;