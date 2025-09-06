const getSkillsArray = (skillsArray) => {
  if (!skillsArray) return [];

  return Object.entries(skillsArray).map(([name, averageMark]) => ({
    name,
    averageMark,
  }));
};

export default getSkillsArray;
