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
    color: theme.palette.action.hover,
    borderRadius: 1,
    transition: 'background-color 0.3s, transform 0.3s',
    ':hover': {
      backgroundColor: `${theme.palette.primary['200']}29`,
      color: theme.palette.action.active
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