export const styles = {
  wrapper: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    gridGap: theme.spacing(2),
    paddingY: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.neutral[400]}`,
  }),
  iconWrapper: {
    width: 28,
    height: 28,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: (theme) => ({
    backgroundColor: theme.palette.neutral[500],
    width: 24,
    height: 24,
    margin: theme.spacing(1),
    borderRadius: '50%',
    flex: '0 0 24px',
  }),
  arrowUpIcon: (theme) => ({
    fontSize: 14,
    fill: theme.palette.success.main,
  }),
  arrowDownIcon: (theme) => ({
    fontSize: 14,
    fill: theme.palette.error.main,
  }),
  eyeHidden: (theme) => ({
    fontSize: 14,
    fill: theme.palette.neutral[100],
  }),
  eye: (theme) => ({
    fontSize: 14,
    fill: theme.palette.primary[200],
  }),
  text: (theme) => ({
    color: theme.palette.text.primary,
    width: '100%',
  }),
  number: (theme) => ({
    color: theme.palette.primary['200'],
    width: 'auto',
    paddingX: '7px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: theme.palette.neutral['800'],
    lineHeight: '24px',
  }),
};
