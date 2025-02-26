import matchSkills from './matchSkills';

const prepareSkillsDataInterviewSkills = ({ hostSkills, userSkills }) => {
  if (!hostSkills || !userSkills) return;

  const { hardSkills: hardSkillsHost, softSkills: softSkillsHost } = hostSkills;
  const { hardSkills: hardSkillsUser, softSkills: softSkillsUser } = userSkills;

  if (!hardSkillsUser || !softSkillsUser || !hardSkillsHost || !softSkillsHost) return;

  return {
    hardSkills: matchSkills({ skillsHost: hardSkillsHost, skillsUser: hardSkillsUser }),
    softSkills: matchSkills({ skillsHost: softSkillsHost, skillsUser: softSkillsUser }),
  };
};

export default prepareSkillsDataInterviewSkills;
