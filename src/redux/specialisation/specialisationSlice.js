import { createSlice } from '@reduxjs/toolkit';

const specialisationSlice = createSlice({
  name: 'specialisation',
  initialState: {
    selectedSpecialisation: null,
  },
  reducers: {
    setSelectedSpecialisation: (state, { payload }) => {
      state.selectedSpecialisation = { ...payload };
    },
  },

});

export const { setSelectedSpecialisation } = specialisationSlice.actions;
export default specialisationSlice.reducer;

