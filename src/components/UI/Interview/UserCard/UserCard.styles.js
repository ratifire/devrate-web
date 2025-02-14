export const styles = {
  wrapper: (theme) => ({
    padding: theme.spacing(4),
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  }),
  box: {
    display: 'flex',
    gap: '16px',
  },
  boxInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  role: (theme) => ({
    color: theme.palette.userCard.role.color,
  }),
  data: (theme) => ({
    color: theme.palette.userCard.date.color,
  }),
  Junior: (theme) => ({
    color: theme.palette.userCard.lvl.junior,
  }),
  Middle: (theme) => ({
    color: theme.palette.userCard.lvl.middle,
  }),
  Senior: (theme) => ({
    color: theme.palette.userCard.lvl.senior,
  }),
  btn: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '0.17px',
    textTransform: 'none',
    width: '100%',
    padding: '12px 16px',
  },
};
