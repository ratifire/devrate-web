export const styles = {
  playerWrapper: (theme) => ({
    paddingTop: '46px',
    '& video': {
      aspectRatio: '16/9',
      width: '100%',
      borderRadius: 2,
      boxShadow: `0 0 0 1px ${theme.palette.interviewPreviewVideo.shadow}`,
    },
  }),
};
