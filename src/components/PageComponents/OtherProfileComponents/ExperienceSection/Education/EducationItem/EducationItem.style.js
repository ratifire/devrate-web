const styles = {
  educationItemContainer: (theme) => ({
    width: '100%',
    marginBottom: theme.spacing(4),
    padding: theme.spacing(3),
    backgroundColor: '#3E3E40',
    borderRadius: 2,
  }),
  itemHeaderContainer: (theme) => ({
    width: '100%',
    marginBottom: theme.spacing(3),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
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
  link: (theme) => ({
    color: theme.palette.primary[200],
  }),
  dateContainer: (theme) => ({
    color: theme.palette.text.secondary,
    fontSize: theme.typography.subtitle2.fontSize,
    position: 'absolute',
    top: '5px',
    right: '8px',
  }),
};

export default styles;