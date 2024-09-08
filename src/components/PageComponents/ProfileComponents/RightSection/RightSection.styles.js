export const styles = {
  wrapper: (theme) => ({
    padding: theme.spacing(4),
  }),
  wrapperBox: (theme) => ({
    position: 'relative',
    marginBottom: theme.spacing(4),
    ':last-child': {
      marginBottom: 0,
    },
  }),
  title: (theme) => ({
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(2),
  }),
  wrapperLink: {
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperLanguages: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  aboutMe: (theme) => ({
    color: theme.palette.neutral['100'],
    overflowWrap: 'break-word',
  }),
  btnIcon: (theme) => ({
    flex: '1 0 44px',
    color: theme.palette.primary['100'],
    borderRadius: 1,
    ':hover': {
      backgroundColor: `${theme.palette.primary['200']}29`,
    },
    svg: {
      fontSize: '18px',
    },
  }),
  box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};
