export const styles = {
  box: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    paddingRight: '16px',
    maxHeight: '376px',
    height: '100%',
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
