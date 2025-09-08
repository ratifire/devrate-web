export const styles = {
  container: (theme) => ({
    position: 'relative',
    paddingBottom: '16px',
    paddingLeft: '22px',
    paddingRight: '22px',
    borderRadius: theme.spacing(2),
    color: theme.palette.interviewPreviewVideo.color,
    display: 'flex',
    flexDirection: 'column',
  }),
  interviewVideo: (theme) => ({
    borderRadius: theme.spacing(2),
    boxShadow: `0 0 0 1px ${theme.palette.interviewPreviewVideo.shadow}`,
    '& .react-player__preview': {
      borderRadius: theme.spacing(2),
    },
  }),
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: (theme) => ({
    fontWeight: 500,
    fontSize: '1rem',
    color: theme.palette.interviewPreviewVideo.interviewPreviewVideoTitleColor,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  }),
  playerWrapper: (theme) => ({
    position: 'relative',
    aspectRatio: '16/9',
    width: '100%',
    borderRadius: theme.spacing(2),
    boxShadow: `0 0 0 1px ${theme.palette.interviewPreviewVideo.shadow}`,
    overflow: 'hidden',
  }),
};
