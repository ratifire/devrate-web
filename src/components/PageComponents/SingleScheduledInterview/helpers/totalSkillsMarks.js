const totalSkillsMarks = (skills, round = 1) => {
  if (!skills) {
    return 0;
  }
  const result = skills.reduce((accumulator, skill) => {
    accumulator += skill.averageMark;
    return accumulator;
  }, 0);

  return +(result / skills.length).toFixed(1) * round;
};

export default totalSkillsMarks;
