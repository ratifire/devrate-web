import { createSlice } from '@reduxjs/toolkit';

const specializationSlice = createSlice({
  name: 'specialization',
  initialState: {
    selectedSpecialization: null,
    mainMastery: null,
  },
  reducers: {
    setSelectedSpecialization: (state, { payload }) => {
      state.selectedSpecialization = { ...payload };
    },
    setMainMastery: (state, { payload }) => {
      state.mainMastery = { ...payload };
    },
  },
});

export const { setSelectedSpecialization, setMainMastery } = specializationSlice.actions;
export default specializationSlice.reducer;
