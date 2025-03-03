export const styles = {
  wrapper: (theme) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gridGap: `${theme.spacing(4)} ${theme.spacing(3)}`,
    marginBottom: theme.spacing(5),
  }),
  timeslotDescription: {
    lineHeight: '24px',
    letterSpacing: '0.15px',
  },
  timeslotDescriptionError: (theme) => ({
    color: theme.palette.error.main,
  }),
};
