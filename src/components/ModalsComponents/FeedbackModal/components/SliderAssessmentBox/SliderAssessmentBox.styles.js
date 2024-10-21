export const styles = {
  box: (theme, size) => ({
    display: 'flex',
    flexDirection: 'column',
    paddingRight: '18px',
    paddingTop: '22px',
    paddingBottom: '6px',
    maxHeight: size === 'small' ? '180px' : '300px',
    gap: theme.spacing(5),
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: 6,
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: theme.palette.scroll.scrollWrapp,
      borderRadius: 8,
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 6,
      backgroundColor: theme.palette.scroll.scrollEl,
    },
  }),
};
