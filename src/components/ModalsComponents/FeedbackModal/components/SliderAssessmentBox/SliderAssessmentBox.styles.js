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
      width: '6px',
    },
    '&::-webkit-scrollbar-track': {
      background: theme.palette.background.scrollbarTrack,
      borderRadius: '6px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: theme.palette.background.scrollbarThumb,
      borderRadius: '6px',
    },
  }),
};
