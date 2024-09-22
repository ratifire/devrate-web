export const styles = {
  wrapper: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    gridGap: theme.spacing(3),
    paddingY: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.neutral['400']}`,
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
  })
};
