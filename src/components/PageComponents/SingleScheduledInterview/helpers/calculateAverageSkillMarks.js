import { totalSkillsMarks } from './index.js';

const calculateAverageSkillMarks = (allSkills) => {
  if (!allSkills) {
    return {
      hardSkillsAverage: 0,
      softSkillsAverage: 0,
      allSkillsAverage: 0,
    };
  }

  const { hardSkills, softSkills } = allSkills;

  const totalHardMarks = totalSkillsMarks(hardSkills);

  const totalSoftMarks = totalSkillsMarks(softSkills);

  const averageHardSkills = +(totalHardMarks / hardSkills.length).toFixed(1) * 10;
  const averageSoftSkills = +(totalSoftMarks / softSkills.length).toFixed(1) * 10;

  return {
    hardSkillsAverage: averageHardSkills,
    softSkillsAverage: averageSoftSkills,
    allSkillsAverage: (averageHardSkills + averageSoftSkills) / 2,
  };
};

export default calculateAverageSkillMarks;
