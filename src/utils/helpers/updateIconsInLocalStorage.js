import { iconsLocalStorage } from '../helpers';

export const updateIconsInLocalStorage = (data, iconsMap, iconValues, storageKey) => {
  if (data) {
    const existingIcons = iconsMap;
    const itemsWithoutIcons = data.filter((item) => !existingIcons[item.id]);

    if (itemsWithoutIcons.length > 0) {
      const shuffledIcons = [...iconValues].sort(() => 0.5 - Math.random());
      const newIcons = {};
      itemsWithoutIcons.forEach((item, index) => {
        newIcons[item.id] = shuffledIcons[index % shuffledIcons.length];
      });
      iconsLocalStorage({ ...existingIcons, ...newIcons }, storageKey);
    }
  }
};
