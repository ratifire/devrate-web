const matchSkills = ({ skillsHost, skillsUser }) => {
  return skillsHost
    .map((hostSkill, i) => {
      const matchedSkill = skillsUser.find((userSkill) => userSkill.name === hostSkill.name);
      if (!matchedSkill) return null;
      return {
        id: i,
        name: hostSkill.name,
        leftGrade: Math.round(hostSkill.averageMark),
        rightGrade: Math.round(matchedSkill.averageMark),
      };
    })
    .filter(Boolean);
};

export default matchSkills;
