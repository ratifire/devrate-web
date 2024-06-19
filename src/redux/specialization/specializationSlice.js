import { createSlice } from '@reduxjs/toolkit';

const specializationSlice = createSlice({
  name: 'specialization',
  initialState: {
    selectedSpecialization: null,
  },
  reducers: {
    setSelectedSpecialization: (state, { payload }) => {
      state.selectedSpecialization = { ...payload };
    },
  },

});

export const { setSelectedSpecialization } = specializationSlice.actions;
export default specializationSlice.reducer;

