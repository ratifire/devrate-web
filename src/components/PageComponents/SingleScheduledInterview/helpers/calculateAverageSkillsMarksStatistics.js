import { totalSkillsMarks } from './index.js';

const calculateAverageSkillsMarksStatistics = (allSkills) => {
  if (!allSkills) {
    return {
      hardSkillsAverage: 0,
      softSkillsAverage: 0,
      allSkillsAverage: 0,
    };
  }

  const { hardSkills, softSkills } = allSkills;

  const totalHardMarks = totalSkillsMarks(hardSkills, 10);
  const totalSoftMarks = totalSkillsMarks(softSkills, 10);

  return {
    hardSkillsAverage: totalHardMarks,
    softSkillsAverage: totalSoftMarks,
    allSkillsAverage: (totalHardMarks + totalSoftMarks) / 2,
  };
};

export default calculateAverageSkillsMarksStatistics;
