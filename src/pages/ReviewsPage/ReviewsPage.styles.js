export const styles = {
  title: () => ({
    marginBottom: '49px',
  }),
  input: (theme) => ({
    flex: `0 1 100%`,
    display: 'flex',
    alignItems: 'flex-start',
    gridGap: theme.spacing(3),
    minHeight: '40px',
  }),
  btn: (theme) => ({
    paddingY: '14px',
    maxWidth: '228px',
    marginTop: theme.spacing(4),
    alignSelf: 'flex-end',
  }),
  form: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
};
