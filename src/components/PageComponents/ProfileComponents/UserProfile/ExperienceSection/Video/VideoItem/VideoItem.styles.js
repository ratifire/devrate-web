const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gridGap: '16px',
    position: 'relative',
  },
  controlsInfo: (theme) => ({
    position: 'absolute',
    bottom: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '0 0 4px 4px',
    width: '100%',
    padding: '24px 12px',
    backdropFilter: 'blur(60px)',
    background: theme.palette.profile.experience.video.controlsInfo.background,
  }),
};

export default styles;
