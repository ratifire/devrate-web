export const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: 24,
  },
  wrapperAvatar: {
    flex: '1 0 100%',
    marginRight: 0,
    marginBottom: 4,
    '> button': {
      padding: 0,
      borderRadius: '4px',
    },
    '@media (min-width: 600px)': {
      flex: '1 0 132px',
      marginRight: 16,
      marginBottom: 0,
    },
  },
  avatar: {
    width: 132,
    height: 132,
    borderRadius: '4px',
  },
  wrapperText: {
    flex: '1 0 calc(100% - 148px)',
    position: 'relative',
  },
  wrapperTextBtn: {
    position: 'absolute',
    top: 0,
    right: 0,
    button: {
      color: '#A9A9AA',
    },
  },
  userName: {
    fontSize: 24,
    lineHeight: '38px',
    fontWeight: 500,
    color: '#fff',
    letterSpacing: '0.15px',
    marginBottom: 4,
  },
  speciality: {
    fontSize: 20,
    lineHeight: '30px',
    color: '#C5C5C6',
    letterSpacing: '0.15px',
    marginBottom: 4,
  },
  city: {
    display: 'flex',
    fontSize: 16,
    lineHeight: '22px',
    fontWeight: 500,
    color: '#C5C5C6',
    letterSpacing: '0.17px',
    marginBottom: 4,
  },
  online: {
    display: 'flex',
    fontSize: 16,
    lineHeight: '22px',
    fontWeight: 500,
    color: '#64FF2E',
    letterSpacing: '0.17px',
  },
  icon: {
    fontSize: 18,
    marginRight: 4,
  },
  buttons: {
    flex: '1 1 100%',
    display: 'flex',
    width: '100%',
    gridGap: 16,
    marginTop: 20,
  },
  btn: {
    paddingY: 14,
    flex: '1 0 calc(100% - 60px)',
    textTransform: 'lowercase',
    backgroundColor: '#8133F1',
    '::first-letter': {
      textTransform: 'uppercase',
    },
  },
  btnIcon: {
    flex: '1 0 44px',
    color: '#B78AF7',
    borderRadius: '4px',
  },
};
