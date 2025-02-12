const totalSkillsMarks = (skills) => {
  const result = skills.reduce((accumulator, skill) => {
    accumulator += skill.averageMark;
    return accumulator;
  }, 0);

  return +(result / skills.length).toFixed(1) * 10;
};

export default totalSkillsMarks;
