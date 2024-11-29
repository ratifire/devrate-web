export const sortSkillsByOriginal = (original, sorted) => {
  if (sorted.length === 0) {
    return original.map((item) => ({
      ...item,
      isSorted: false,
    }));
  }

  const sortedOrder = sorted.map((item) => item.name.toLowerCase());

  const markedOriginal = original.map((item) => ({
    ...item,
    isSorted: sortedOrder.includes(item.name.toLowerCase()),
  }));

  return markedOriginal.sort((a, b) => {
    const indexA = sortedOrder.indexOf(a.name.toLowerCase());
    const indexB = sortedOrder.indexOf(b.name.toLowerCase());

    if (indexA === -1 && indexB === -1) return 0;
    if (indexA >= 0 && indexB === -1) return -1;
    if (indexA === -1 && indexB >= 0) return 1;
    return indexA - indexB;
  });
};
