import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeMastery: 'JUNIOR',
};

const activeMasterySlice = createSlice({
  name: 'activeMastery',
  initialState,
  reducers: {
    setActiveMastery: (state, action) => {
      state.activeMastery = action.payload;
    },
  },
});

export const { setActiveMastery } = activeMasterySlice.actions;
export default activeMasterySlice.reducer;