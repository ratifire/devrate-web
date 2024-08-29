export const styles = {
  sideBarEventWrapper: (theme) => ({
    height: '162px',
    backgroundColor: theme.palette.neutral[500],
    borderRadius: 2,
    marginBottom: theme.spacing(2),
  }),
  titleDateTimeBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 16px 16px 8px',
  },
  title: {
    font: 'Roboto',
    weight: 500,
    fontSize: '20px',
    lineHeight: '32px',
    letterSpacing: '0.15px',
  },
  dateAndTime: (theme) => ({
    font: 'Roboto',
    weight: 400,
    fontSize: '14px',
    lineHeight: '20.02px',
    letterSpacing: '0.17px',
    color: theme.palette.primary[50],
  }),
};
