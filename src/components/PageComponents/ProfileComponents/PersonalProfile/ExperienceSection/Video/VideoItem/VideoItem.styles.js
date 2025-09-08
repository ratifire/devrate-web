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
    padding: '18px 12px',
    backdropFilter: 'blur(60px)',
    background: theme.palette.profile.experience.video.controlsInfo.background,
  }),
  eyeHidden: (theme) => ({
    fontSize: 14,
    fill: theme.palette.experienceSkillSect.eye.eyeHidden,
  }),
  eye: (theme) => ({
    fontSize: 14,
    fill: theme.palette.experienceSkillSect.eye.eyeVisible,
  }),
  iconWrapper: {
    width: 34,
    height: 34,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: (theme) => ({
    backgroundColor: theme.palette.profile.experience.video.icon.backgroundColor,
    width: '34px',
    height: 34,
    borderRadius: 1,
  }),
};

export default styles;
