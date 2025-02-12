import { totalSkillsMarks } from './index.js';

const calculateAverageSkillMarksStatistics = (allSkills) => {
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

  return {
    hardSkillsAverage: totalHardMarks,
    softSkillsAverage: totalSoftMarks,
    allSkillsAverage: (totalHardMarks + totalSoftMarks) / 2,
  };
};

export default calculateAverageSkillMarksStatistics;
