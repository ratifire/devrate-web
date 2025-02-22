import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeMastery: '',
};

const activeMasterySlice = createSlice({
  name: 'activeMastery',
  initialState,
  reducers: {
    setActiveMastery: (state, action) => {
      state.activeMastery = action.payload?.toUpperCase();
    },
  },
});

export const { setActiveMastery } = activeMasterySlice.actions;
export default activeMasterySlice.reducer;
