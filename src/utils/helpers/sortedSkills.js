export const sortedSkills = (skills, searchStr) => {
  if (typeof searchStr === 'string') {
    searchStr = searchStr.split(',').reduce((acc, item) => {
      const trimmed = item.trim();
      return trimmed.match(/[a-zA-Zа-яА-ЯіІїЇєЄґҐ0-9]/) ? [...acc, trimmed] : acc;
    }, []);
  }

  return skills
    .filter((item) => searchStr.some((searchTerm) => item.name.toLowerCase().includes(searchTerm.toLowerCase())))
    .sort((a, b) => {
      const indexA = searchStr.findIndex((searchTerm) => a.name.toLowerCase().includes(searchTerm.toLowerCase()));
      const indexB = searchStr.findIndex((searchTerm) => b.name.toLowerCase().includes(searchTerm.toLowerCase()));
      return indexA - indexB;
    });
};
