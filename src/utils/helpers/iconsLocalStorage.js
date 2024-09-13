const loadIconsFromLocalStorage = (key) => {
  const storedIcons = localStorage.getItem(key);
  return storedIcons ? JSON.parse(storedIcons) : {};
};

const saveIconsToLocalStorage = (icons, key) => {
  localStorage.setItem(key, JSON.stringify(icons));
};

const iconsLocalStorage = (newIcons, key) => {
  const state = loadIconsFromLocalStorage(key)
  Object.keys(newIcons).forEach(id => {
    if (!state[id]) {
      state[id] = newIcons[id];
    }
  });
  saveIconsToLocalStorage(state, key);
}

export {iconsLocalStorage, loadIconsFromLocalStorage};