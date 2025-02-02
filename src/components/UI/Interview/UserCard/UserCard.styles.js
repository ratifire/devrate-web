export const styles = {
  wrapper: (theme) => ({
    padding: theme.spacing(4),
    maxWidth: '480px',
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
  junior: (theme) => ({
    color: theme.palette.userCard.lvl.junior,
  }),
  middle: (theme) => ({
    color: theme.palette.userCard.lvl.middle,
  }),
  senior: (theme) => ({
    color: theme.palette.userCard.lvl.senior,
  }),
  btn: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '0.17px',
    textTransform: 'none',
    maxWidth: '432px',
    width: '100%',
    padding: '12px 16px',
  },
};
