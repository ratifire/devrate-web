export const styles = {
  wrapper:(theme) => ({
    display: 'flex',
    alignItems: 'center',
    gridGap: theme.spacing(3),
  }),
  icon: (theme) => ({
    backgroundColor: theme.palette.neutral[800],
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(1),
    borderRadius: '50%',
    flex: '0 0 24px',
  }),
  arrowUpIcon: (theme) => ({
    fill: theme.palette.success.main,
  }),
  arrowDownIcon: (theme) => ({
    fill: theme.palette.error.main,
  }),
  text: (theme) => ({
    color: theme.palette.text.primary,
    width: '100%',
  }),
  grade: (theme) => ({
    color: theme.palette.primary[200],
  }),
}