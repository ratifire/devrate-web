const getAverageSkillsMark = (skillsArray) => {
  if (!Array.isArray(skillsArray)) return 0;

  return skillsArray.length > 0
    ? parseFloat((skillsArray.reduce((acc, skill) => acc + skill.averageMark, 0) / skillsArray.length).toFixed(1))
    : 0;
};

export default getAverageSkillsMark;
