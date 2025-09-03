const getSkillsArray = (skillsArray) =>
  Object.entries(skillsArray).map(([name, averageMark]) => ({
    name,
    averageMark,
  }));

export default getSkillsArray;
