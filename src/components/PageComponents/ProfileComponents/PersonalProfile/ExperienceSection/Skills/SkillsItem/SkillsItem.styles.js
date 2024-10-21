export const styles = {
  wrapper: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    gridGap: theme.spacing(2),
    paddingY: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.neutral[400]}`,
    ">p": {
      flex: '1 2 max(420px)',
      width: '2vw',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      textWrap: 'nowrap',
    },
  }),
  iconWrapper: {
    width: 28,
    height: 28,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: (theme) => ({
    backgroundColor: theme.palette.experienceSkillSect.eye.backgroundColor,
    width: 24,
    height: 24,
    margin: theme.spacing(1),
    borderRadius: '50%',
    flex: '0 0 24px',
  }),
  arrowUpIcon: (theme) => ({
    fontSize: 14,
    fill: theme.palette.success.main,
  }),
  arrowDownIcon: (theme) => ({
    fontSize: 14,
    fill: theme.palette.error.main,
  }),
  eyeHidden: (theme) => ({
    fontSize: 14,
    fill: theme.palette.experienceSkillSect.eye.eyeHidden,
  }),
  eye: (theme) => ({
    fontSize: 14,
    fill: theme.palette.experienceSkillSect.eye.eyeVisible,
  }),
  text: (theme) => ({
    color: theme.palette.text.primary,
    width: '100%',
  }),
  number: (theme) => ({
    color: theme.palette.experienceSkillSect.number.color,
    width: 'auto',
    paddingX: '7px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: `${theme.palette.experienceSkillSect.number.backgroundColor}`,
    lineHeight: '24px',
  }),
};
