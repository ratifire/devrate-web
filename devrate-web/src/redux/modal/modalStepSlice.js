import { createSlice } from '@reduxjs/toolkit';

const modalStepSlice = createSlice({
  name: 'modalStep',
  initialState: {
    step: 0,
  },
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const { setStep } = modalStepSlice.actions;
export default modalStepSlice.reducer;
