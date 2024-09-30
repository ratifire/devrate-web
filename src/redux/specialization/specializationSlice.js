import { createSlice } from '@reduxjs/toolkit';

const specializationSlice = createSlice({
  name: 'specialization',
  initialState: {
    activeSpecialization: null,
    mainSpecialization: null,
    fullSpecializations: [],
  },
  reducers: {
    setActiveSpecialization: (state, { payload }) => {
      state.activeSpecialization = payload
    },
    setMainSpecializations: (state, { payload }) => {
      if (Array.isArray(payload)) {
        state.fullSpecializations = payload;
        state.mainSpecialization =  payload.find((spec) => spec.main);
        return
      }

      state.mainSpecialization = null;
    },
  },
});

export const { setActiveSpecialization, setMainSpecializations } = specializationSlice.actions;
export default specializationSlice.reducer;
