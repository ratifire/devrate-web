export const styles = {
  btnIcon: (theme) => ({
    color: theme.palette.iconBtn.createBtn.color,
    transition: 'background-color 0.3s, transform 0.3s',
    borderRadius: 1,
    ':hover': {
      backgroundColor: theme.palette.iconBtn.createBtn.hover.backgroundColor,
      color: theme.palette.iconBtn.createBtn.hover.color,
    },
    svg: {
      fontSize: '18px',
    },
  }),
  wrapper: (theme) => ({
    height: '100%',
    maxWidth: '480px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: theme.spacing(3),
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.level2,
    borderRadius: 2,
    '@media(min-width: 1536px)': {
      maxWidth: '100%',
    },
  }),
  title: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: theme.spacing(2),
  }),
  skillsContainer: (theme) => ({
    overflowY: 'auto',
    paddingRight: '10px',
    '&::-webkit-scrollbar': {
      width: 10,
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: theme.palette.scroll.scrollWrapp,
      borderRadius: 8,
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 6,
      backgroundColor: theme.palette.scroll.scrollEl,
    },
  }),
  hardSkills: {
    height: '22.9375rem',
    '@media(min-width: 1536px)': {
      height: '20.5625rem',
    },
  },
  softSkills: {
    height: '7.25rem',
  },

  passedHardSkills: {
    height: '100%',
  },

  passedSoftSkills: {
    height: '100%',
  },
  markWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: '10px',
  },
  mark: (theme) => ({
    color: theme.palette.specialization.mark.color,
  }),
};
