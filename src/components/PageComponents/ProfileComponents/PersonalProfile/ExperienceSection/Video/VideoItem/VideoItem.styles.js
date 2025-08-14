const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gridGap: '16px',
    position: 'relative',
    borderRadius: 1,
    '& > iframe': {
      aspectRatio: '16 / 9',
      width: '100%',
      display: 'block',
      minHeight: '270px',
      borderRadius: 1,
    },
  },

  controlsInfo: {
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
    background: 'linear-gradient(0deg, #1d1d1d 0%, rgba(29, 29, 29, 0) 100%)',
  },
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
  icon: {
    backgroundColor: '#252527',
    width: '34px',
    height: 34,
    borderRadius: 1,
  },
};

export default styles;
