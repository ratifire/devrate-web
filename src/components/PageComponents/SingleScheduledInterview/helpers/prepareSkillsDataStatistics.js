const prepareSkillsDataStatistics = (allSkills) => {
  const { hardSkillMark, softSkillMark } = allSkills;

  return {
    hardSkillsAverage: Math.round(hardSkillMark * 10),
    softSkillsAverage: Math.round(softSkillMark * 10),
    allSkillsAverage: Math.round(((hardSkillMark + softSkillMark) / 2) * 10),
  };
};

export default prepareSkillsDataStatistics;
