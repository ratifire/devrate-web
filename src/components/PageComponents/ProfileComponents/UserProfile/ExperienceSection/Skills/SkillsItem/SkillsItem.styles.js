export const styles = {
  wrapperSorted: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    gridGap: theme.spacing(3),
    paddingY: theme.spacing(2),
    color: theme.palette.primary['200'],
    borderBottom: `1px solid ${theme.palette.primary['100']}`,
    '>*': {
      transition: 'all 0.1s linear',
    },
    '>span': {
      fontWeight: 500,
      color: theme.palette.primary['100'],
    },
    '>h6': {
      color: theme.palette.primary['200'],
      border: `1px solid ${theme.palette.primary['200']}`,
    }
  }),
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
    width: '24px',
    paddingX: '7px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: theme.palette.neutral['800'],
    border: '1px solid transparent',
    lineHeight: '24px',
  })
};
