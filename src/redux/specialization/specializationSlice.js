import { createSlice } from '@reduxjs/toolkit';

const specializationSlice = createSlice({
  name: 'specialization',
  initialState: {
    selectedSpecialization: null,
    specialisationId: null,
  },
  reducers: {
    setSelectedSpecialization: (state, { payload }) => {
      state.selectedSpecialization = { ...payload };
    },
    setSpecialisationId: (state, { payload }) => {
      state.softAndHardSkills = { ...payload };
    }
  },

});

export const { setSelectedSpecialization, setSpecialisationId } = specializationSlice.actions;
export default specializationSlice.reducer;

