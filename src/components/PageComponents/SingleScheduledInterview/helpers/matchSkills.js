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
        leftGrade: 0,
        rightGrade: Math.round(skillsHost[i]?.averageMark),
      });
    }

    if (!skillsHostMatch && skillsUser[i]) {
      otherSkills.unshift({
        id: i,
        name: skillsUser[i]?.name,
        leftGrade: Math.round(skillsUser[i]?.averageMark),
        rightGrade: 0,
      });
    }

    if (skillsHostMatch && skillsUserMatch) {
      skills.push({
        id: i,
        name: skillsHostMatch.name,
        leftGrade: Math.round(skillsHostMatch.averageMark),
        rightGrade: Math.round(skillsUserMatch.averageMark),
      });
    }
  }

  return {
    skills,
    otherSkills,
  };
};

export default matchSkills;
