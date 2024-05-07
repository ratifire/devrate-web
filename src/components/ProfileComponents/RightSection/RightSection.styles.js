export const styles = {
  wrapper: (theme) => ({
    padding: theme.spacing(4),
  }),
  wrapperBox: (theme) => ({
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
    color: theme.palette.neutral[100],
  }),
};
