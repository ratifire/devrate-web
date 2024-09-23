export const sortedSkills = (skills, searchStr) => {
  
  if (typeof searchStr === 'string') {
    if (searchStr.includes(',')) {
      searchStr = searchStr.split(',').map((item) => item.trim());
    } else {
      searchStr = [searchStr.trim()];
    }
  }
  return skills.sort((a, b) => {
    const matchA = searchStr.some((searchTerm) => a.name.includes(searchTerm));
    const matchB = searchStr.some((searchTerm) => b.name.includes(searchTerm));
    
    if (matchA && matchB) {
      const indexA = searchStr.findIndex((searchTerm) => a.name.includes(searchTerm));
      const indexB = searchStr.findIndex((searchTerm) => b.name.includes(searchTerm));
      return indexA - indexB;
    }
    
    if (matchA) return -1;
    if (matchB) return 1;
    
    return 0;
  });
};
