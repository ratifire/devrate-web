const prepareSkillsDataParticipantEvaluations = ({ hostSkills, userSkills, hostName, userName }) => {
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

  const { hardSkillMark: hardSkillsHost, softSkillMark: softSkillsHost } = hostSkills;
  const { hardSkillMark: hardSkillsUser, softSkillMark: softSkillsUser } = userSkills;

  return [
    {
      name: 'Soft Skills',
      [hostName]: Math.round(softSkillsHost * 10) / 10,
      [userName]: Math.round(softSkillsUser * 10) / 10,
    },
    {
      name: 'Hard Skills',
      [hostName]: Math.round(hardSkillsHost * 10) / 10,
      [userName]: Math.round(hardSkillsUser * 10) / 10,
    },
    {
      name: 'Over All',
      [hostName]: Math.round((hardSkillsHost * 10 + softSkillsHost * 10) / 2) / 10,
      [userName]: Math.round((hardSkillsUser * 10 + softSkillsUser * 10) / 2) / 10,
    },
  ];
};

export default prepareSkillsDataParticipantEvaluations;
