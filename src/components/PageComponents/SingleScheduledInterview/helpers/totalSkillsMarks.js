const totalSkillsMarks = (skills) => {
  return skills.reduce((accumulator, skill) => {
    accumulator += skill.averageMark;
    return accumulator;
  }, 0);
};

export default totalSkillsMarks;
