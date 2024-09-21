export const styles = {
  sideBarEventContainer: (theme) => ({
    height: '162px',
    backgroundColor: theme.palette.neutral[500],
    borderRadius: 2,
    padding: theme.spacing(3),
    paddingRight: theme.spacing(3),
    marginBottom: theme.spacing(2),
  }),
  title: {
    '&::first-letter': {
      textTransform: 'uppercase',
    },
  },
  titleDateTimeBox: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  }),
  dateAndTime: (theme) => ({
    color: theme.palette.primary[50],
  }),
  host: (theme) => ({
    color: theme.palette.primary[50],
    marginBottom: theme.spacing(2),
  }),
  hostTitle: (theme) => ({
    lineHeight: '19.92px',
    letterSpacing: '0.4px',
    color: theme.palette.neutral[50],
    marginBottom: theme.spacing(2),
  }),
  host_link: (theme) => ({
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.action.hover,
    },
  }),
  cancelEventBtn: (theme) => ({
    color: theme.palette.primary[100],
  }),
};
