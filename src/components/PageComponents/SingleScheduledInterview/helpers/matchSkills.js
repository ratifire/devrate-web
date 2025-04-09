const matchSkills = ({ skillsHost, skillsUser }) => {
  const skills = [];
  const otherSkills = [];
  const skillsArrayLength = skillsUser.length + skillsHost.length;

  for (let i = 0; i < skillsArrayLength; i++) {
    let skillsHostMatch;
    let skillsUserMatch;

    if (skillsHost[i]) {
      skillsHostMatch = skillsUser.find((skill) => skill.name === skillsHost[i]?.name);
    }

    if (skillsUser[i]) {
      skillsUserMatch = skillsHost.find((skill) => skill.name === skillsUser[i]?.name);
    }

    if (!skillsUserMatch && skillsHost[i]) {
      otherSkills.push({
        id: i,
        name: skillsHost[i]?.name,
        hostGrade: Math.round(skillsHost[i]?.averageMark),
        userGrade: null,
      });
    }

    if (!skillsHostMatch && skillsUser[i]) {
      otherSkills.unshift({
        id: i,
        name: skillsUser[i]?.name,
        hostGrade: null,
        userGrade: Math.round(skillsUser[i]?.averageMark),
      });
    }

    if (skillsHostMatch && skillsUserMatch) {
      skills.push({
        id: i,
        name: skillsHostMatch.name,
        hostGrade: Math.round(skillsHostMatch.averageMark),
        userGrade: Math.round(skillsUserMatch.averageMark),
      });
    }
  }

  return {
    skills,
    otherSkills,
  };
};

export default matchSkills;
