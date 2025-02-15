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
      [hostName]: Math.round(softSkillsHost),
      [userName]: Math.round(softSkillsUser),
    },
    {
      name: 'Hard Skills',
      [hostName]: Math.round(hardSkillsHost),
      [userName]: Math.round(hardSkillsUser),
    },
    {
      name: 'Over All',
      [hostName]: Math.round((hardSkillsHost + softSkillsHost) / 2),
      [userName]: Math.round((hardSkillsUser + softSkillsUser) / 2),
    },
  ];
};

export default prepareSkillsDataParticipantEvaluations;
