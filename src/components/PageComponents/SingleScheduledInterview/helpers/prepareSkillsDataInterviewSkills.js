const prepareSkillsDataInterviewSkills = ({ hostSkills, userSkills }) => {
  if (!hostSkills || !userSkills) return;

  const { hardSkills: hardSkillsHost, softSkills: softSkillsHost } = hostSkills;
  const { hardSkills: hardSkillsUser, softSkills: softSkillsUser } = userSkills;

  if (!hardSkillsUser || !softSkillsUser || !hardSkillsHost || !softSkillsHost) return;

  const softSkills = [];
  const hardSkills = [];

  for (let i = 0; i < hardSkillsHost.length; i++) {
    for (let j = 0; j < hardSkillsUser.length; j++) {
      if (hardSkillsHost[i].name === hardSkillsUser[j].name) {
        hardSkills.push({
          id: i,
          name: hardSkillsHost[i].name,
          leftGrade: hardSkillsHost[i].averageMark,
          rightGrade: hardSkillsUser[j].averageMark,
        });
      }
    }
  }

  for (let i = 0; i < softSkillsHost.length; i++) {
    for (let j = 0; j < softSkillsUser.length; j++) {
      if (softSkillsHost[i].name === softSkillsUser[j].name) {
        softSkills.push({
          id: i,
          name: softSkillsHost[i].name,
          leftGrade: softSkillsHost[i].averageMark,
          rightGrade: softSkillsUser[j].averageMark,
        });
      }
    }
  }

  return { hardSkills, softSkills };
};

export default prepareSkillsDataInterviewSkills;
