const styles = {
  educationItemContainer: (theme) => ({
    width: '100%',
    marginBottom: theme.spacing(4),
    padding: theme.spacing(4),
    backgroundColor: '#3E3E40', //ask to designers
    borderRadius: 2,
  }),
  itemHeaderContainer: (theme) => ({
    width: '100%',
    marginBottom: theme.spacing(3),
    display: 'flex',
    justifyContent: 'space-between',
  }),
  logoTitleContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  courseTitle: (theme) => ({
    color: theme.palette.text.primary,
  }),
  schoolTitle: (theme) => ({
    color: theme.palette.text.secondary,
  }),
  studyDates: (theme) => ({
    color: theme.palette.text.secondary,
  }),
  link: (theme) => ({
    color: theme.palette.primary[200],
  }),
};
export default styles;
