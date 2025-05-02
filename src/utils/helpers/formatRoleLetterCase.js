const formatRoleLetterCase = (role, t) => {
  const translatedRole = t(`interviewRequest.role.${role || 'candidate'}`);
  return translatedRole;
};

export default formatRoleLetterCase;
