export const styles = {
  wrapperSorted: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    gridGap: theme.spacing(3),
    paddingY: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.experienceSkillSect.wrapperSorted.borderColor}`,
    '>*': {
      transition: 'all 0.1s linear',
    },
    '>span': {
      fontWeight: 500,
      color: theme.palette.experienceSkillSect.wrapperSorted.color,
    },
    '>h6': {
      color: theme.palette.experienceSkillSect.number.color,
      border: `1px solid ${theme.palette.experienceSkillSect.number.color}`,
      backgroundColor: theme.palette.experienceSkillSect.number.backgroundColor,
    },
  }),
  wrapper: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    gridGap: theme.spacing(3),
    paddingY: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.experienceSkillSect.wrapperUnSorted.borderColor}`,
  }),
  text: (theme) => ({
    color: theme.palette.text.primary,
    width: '100%',
  }),
  number: (theme) => ({
    color: theme.palette.experienceSkillSect.number.color,
    width: '24px',
    paddingX: '7px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: theme.palette.experienceSkillSect.number.backgroundColor,
    border: '1px solid transparent',
    lineHeight: '24px',
  }),
};
