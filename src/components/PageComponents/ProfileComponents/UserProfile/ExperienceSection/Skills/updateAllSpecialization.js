export const updateAllSpecializations = (specializations) => {
  const skillsMap = new Map();

  specializations.forEach((spec) => {
    spec.hardSkills.forEach((skill) => {
      const existingSkill = skillsMap.get(skill.name);
      if (!existingSkill || skill.averageMark > existingSkill.averageMark) {
        skillsMap.set(skill.name, skill);
      }
    });
  });

  const allSkillsSpecialization = {
    specializationName: 'profile.experience.skills.allSkills',
    masteryName: '',
    hardSkills: Array.from(skillsMap.values()),
    mainSpecialization: false,
  };

  return [allSkillsSpecialization, ...specializations];
};
