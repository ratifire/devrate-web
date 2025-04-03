const formatRoleLetterCase = (role, t, capitalize = true) => {
  const translatedRole = t(`interviewRequest.role.${role?.toLowerCase() || 'candidate'}`);
  return capitalize ? translatedRole.toUpperCase() : translatedRole;
};

export default formatRoleLetterCase;
