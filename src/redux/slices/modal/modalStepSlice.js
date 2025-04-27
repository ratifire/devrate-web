import { createSlice } from '@reduxjs/toolkit';

const modalStepSlice = createSlice({
  name: 'modalStep',
  initialState: {
    step: 0,
  },
  reducers: {
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      state.step -= 1;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const { nextStep, prevStep, setStep } = modalStepSlice.actions;
export default modalStepSlice.reducer;
