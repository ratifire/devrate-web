export const styles = {
  wrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column-reverse',
    gridGap: 8,
  },
  wrapperProgress: {
    width: '100%',
    mr: 1,
  },
  progress: {
    backgroundColor: '#69696B',
    height: 20,
    borderRadius: 10,
    '>span': {
      backgroundColor: '#8133F1',
      borderRadius: 10,
    },
  },
  wrapperText: {
    minWidth: 35,
  },
  text: {
    fontSize: 16,
    lineHeight: '28px',
    color: '#C5C5C6',
    letterSpacing: '0.15px',
  },
};
