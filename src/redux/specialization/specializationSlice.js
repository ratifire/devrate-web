import { createSlice } from '@reduxjs/toolkit';

const specializationSlice = createSlice({
  name: 'specialization',
  initialState: {
    activeSpecialization: null,
    mainSpecialization: null,
    fullSpecializations: [],
    //================================================================
    selectedSpecialization: null,
    mainMastery: null,
  },
  reducers: {
    setSelectedSpecialization: (state, { payload }) => {
      state.selectedSpecialization = payload;
    },
    setMainMastery: (state, { payload }) => {
      state.mainMastery = { ...payload };
    },
    // =============================================================
    setActiveSpecialization: (state, { payload }) => {
      state.activeSpecialization = payload
    },
    setMainSpecializations: (state, { payload }) => {
      if (Array.isArray(payload)) {
        state.fullSpecializations = payload;
        state.mainSpecialization =  payload.find((spec) => spec.main);
        return
      }

      state.mainSpecialization = payload;
    },
  },
});

export const { setSelectedSpecialization, setMainMastery, setActiveSpecialization, setMainSpecializations } = specializationSlice.actions;
export default specializationSlice.reducer;
