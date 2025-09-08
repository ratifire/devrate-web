const getSkillsArray = (skillsArray) => {
  if (!skillsArray) return [];

  return Object.entries(skillsArray).map(([name, averageMark]) => ({
    id: `${name}-${averageMark}`,
    name,
    averageMark,
  }));
};

export default getSkillsArray;
