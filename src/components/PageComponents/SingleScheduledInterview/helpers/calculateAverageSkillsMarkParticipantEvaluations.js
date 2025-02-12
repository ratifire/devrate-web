import { totalSkillsMarks } from './index.js';

const calculateAverageSkillsMarkParticipantEvaluations = ({ hostSkills, userSkills, hostName, userName }) => {
  if (!hostSkills || !userSkills) {
    return [
      {
        name: 'Soft Skills',
        [hostName]: 0,
        [userName]: 0,
      },
      {
        name: 'Hard Skills',
        [hostName]: 0,
        [userName]: 0,
      },
      {
        name: 'Over All',
        [hostName]: 0,
        [userName]: 0,
      },
    ];
  }

  const { hardSkills: hardSkillsHost, softSkills: softSkillsHost } = hostSkills;
  const { hardSkills: hardSkillsUser, softSkills: softSkillsUser } = userSkills;

  const totalHardMarksHost = totalSkillsMarks(hardSkillsHost);
  const totalSoftMarksHost = totalSkillsMarks(softSkillsHost);
  const totalHardMarksUser = totalSkillsMarks(hardSkillsUser);
  const totalSoftMarksUser = totalSkillsMarks(softSkillsUser);

  const totalMarksHost = (totalHardMarksHost + totalSoftMarksHost) / 2;
  const totalMarksUser = (totalHardMarksUser + totalSoftMarksUser) / 2;

  return [
    {
      name: 'Soft Skills',
      [hostName]: totalSoftMarksHost,
      [userName]: totalSoftMarksUser,
    },
    {
      name: 'Hard Skills',
      [hostName]: totalHardMarksHost,
      [userName]: totalHardMarksUser,
    },
    {
      name: 'Over All',
      [hostName]: totalMarksHost,
      [userName]: totalMarksUser,
    },
  ];
};

export default calculateAverageSkillsMarkParticipantEvaluations;
