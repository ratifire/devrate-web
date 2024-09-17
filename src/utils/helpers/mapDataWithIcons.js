export const mapDataWithIcons = (data, iconsMap, iconsSet) => {
  return data?.map((item) => {
    const iconName = iconsMap[item.id];
    const iconComponent = iconsSet[iconName];
    return {
      ...item,
      iconName,
      iconComponent,
    };
  });
};
