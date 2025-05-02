import { createSlice } from '@reduxjs/toolkit';

const initialState = { shouldUpdate: false, hasMount: false };
const updateTabSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    refetchSkills(state) {
      state.shouldUpdate = true;
    },
    resetRefetch(state) {
      state.shouldUpdate = false;
    },
    addMount(state) {
      state.hasMount = true;
    },
  },
});

export const { refetchSkills, resetRefetch, addMount } = updateTabSlice.actions;
export default updateTabSlice.reducer;
