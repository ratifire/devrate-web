export const styles = {
  wrapper: (theme) => ({
    padding: theme.spacing(4),
    display: 'flex',
    borderRadius: theme.spacing(2),
    flexDirection: 'column',
    gap: theme.spacing(4),
    backgroundColor: theme.palette.pagesSections.backgroundColor,
    minHeight: 'calc(100vh - 124px)',
  }),
  input: {
    maxWidth: '306px',
    width: '100%',
    '& .MuiOutlinedInput-input': {
      paddingY: '8px!important',
      paddingX: '12px!important',
    },
  },
};
