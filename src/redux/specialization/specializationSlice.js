import { createSlice } from '@reduxjs/toolkit';

const specializationSlice = createSlice({
  name: 'specialization',
  initialState: {
    selectedSpecialization: null,
    newDataSpecialization: null,
  },
  reducers: {
    setSelectedSpecialization: (state, { payload }) => {
      state.selectedSpecialization = { ...payload };
    },
    setNewDataSpecialization: (state, { payload }) => {
      state.newDataSpecialization = { ...payload };
    }
  },

});

export const { setSelectedSpecialization, setNewDataSpecialization } = specializationSlice.actions;
export default specializationSlice.reducer;

