export const addUniqueItem = (list, item) => {
  if (!item || typeof item !== 'string') return list;
  if (item.length < 2 || item.length > 50) return list;
  if (list.includes(item)) return list;

  return [...list, item];
};
