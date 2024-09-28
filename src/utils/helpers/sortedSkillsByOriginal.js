export const sortSkillsByOriginal = (original, sorted) => {
  
  const sortedOrder = sorted.map((item) => item.name.toLowerCase());
  
  return [...original].sort((a, b) => {
    const indexA = sortedOrder.indexOf(a.name.toLowerCase());
    const indexB = sortedOrder.indexOf(b.name.toLowerCase());
    
    return indexA - indexB;
  });
};