import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeMastery: '',
};

const activeMasterySlice = createSlice({
  name: 'activeMastery',
  initialState,
  reducers: {
    findAndSetMastery: (state, { payload }) => {
      const mainSpec = payload.find((spec) => spec.main);
      state.activeMastery = mainSpec?.mainMasteryLevel.toUpperCase();
    },
    setActiveMastery: (state, action) => {
      state.activeMastery = action.payload?.toUpperCase();
    },
  },
});

export const { setActiveMastery, findAndSetMastery } = activeMasterySlice.actions;
export default activeMasterySlice.reducer;
