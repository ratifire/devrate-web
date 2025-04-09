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
        id: skillsHost[i]?.id,
        name: skillsHost[i]?.name,
        hostGrade: Math.round(skillsHost[i]?.averageMark),
        userGrade: null,
      });
    }

    if (!skillsHostMatch && skillsUser[i]) {
      otherSkills.unshift({
        id: skillsUser[i]?.id,
        name: skillsUser[i]?.name,
        hostGrade: null,
        userGrade: Math.round(skillsUser[i]?.averageMark),
      });
    }

    if (skillsHostMatch && skillsUserMatch) {
      skills.push({
        id: `${skillsHostMatch?.id}-${skillsUserMatch?.id}`,
        name: skillsHostMatch.name,
        hostGrade: Math.round(skillsHost[i]?.averageMark),
        userGrade: Math.round(skillsUser[i]?.averageMark),
      });
    }
  }

  return {
    skills,
    otherSkills,
  };
};

export default matchSkills;
