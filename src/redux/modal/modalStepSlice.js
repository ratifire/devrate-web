import { createSlice } from '@reduxjs/toolkit';

const modalStepSlice = createSlice({
  name: 'modalStep',
  initialState: {
    step: 'personal',
  },
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const { setStep } = modalStepSlice.actions;
export default modalStepSlice.reducer;
