export const styles = {
  contained: (theme) => ({
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '16px',
    color: theme.palette.text.primary,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginY: 0,
    paddingY: '20px',
    paddingX: '12px',
    width: '100%',
    backgroundColor: theme.palette.primary['400'],
    '&:hover': {
      backgroundColor: theme.palette.primary['600'],
    },
    '&:disabled': {
      backgroundColor: theme.palette.neutral['800'],
      color: theme.palette.neutral['500'],
    },
  }),
  text: (theme) => ({
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '24px',
    color: theme.palette.text.secondary,
    textAlign: 'center',
    textTransform: 'capitalize',
    marginY: 0,
    paddingY: 0,
    paddingX: 0,
    width: 'auto',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  }),
  outlined: (theme) => ({
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '24px',
    color: theme.palette.text.primary,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginY: 0,
    paddingY: '20px',
    paddingX: '12px',
    width: '100%',
    border: 1,
    backgroundColor: 'transparent',
    borderColor: theme.palette.primary['400'],
    '&:hover': {
      backgroundColor: 'transparent',
      borderColor: theme.palette.primary['600']
    },
    '&:disabled': {
      borderColor: theme.palette.neutral['800'],
      backgroundColor: 'transparent',
      color: theme.palette.neutral['500'],
    },
  }),
};
