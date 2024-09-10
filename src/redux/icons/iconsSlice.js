import { createSlice } from '@reduxjs/toolkit';

const loadIconsFromLocalStorage = () => {
  const storedIcons = localStorage.getItem('icons');
  return storedIcons ? JSON.parse(storedIcons) : {};
};

const saveIconsToLocalStorage = (icons) => {
  localStorage.setItem('icons', JSON.stringify(icons));
};

const iconsSlice = createSlice({
  name: 'icons',
  initialState: loadIconsFromLocalStorage(),
  reducers: {
    setIcons(state, action) {
      const newIcons = action.payload;
      Object.keys(newIcons).forEach(id => {
        if (!state[id]) {
          state[id] = newIcons[id];
        }
      });
      saveIconsToLocalStorage(state);
    },
  },
});

export const { setIcons } = iconsSlice.actions;
export default iconsSlice.reducer;
