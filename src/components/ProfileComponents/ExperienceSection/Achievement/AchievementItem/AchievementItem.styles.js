const styles = {
  achievementItemContainer: (theme) => ({
    width: '100%',
    padding: theme.spacing(4),
    backgroundColor: '#3E3E40', // check with designers color not correct
    borderRadius: theme.shape.borderRadius,
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
  achievementTitleYearContainer: (theme) => ({
    marginLeft: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }),
  achievementTitle: (theme) => ({
    color: theme.palette.text.primry,
  }),
  achiementYear: (theme) => ({
    marginLeft: theme.spacing(2),

    color: theme.palette.text.secondary,
  }),
  icon: (theme) => ({
    color: theme.palette.primary[200],
  }),
  achievementItemText: (theme) => ({
    color: theme.palette.text.primry,
  }),
  link: (theme) => ({
    color: theme.palette.text.primary,
    textAlign: 'center',
    textDecoration: 'underline',
  }),
};
export default styles;
