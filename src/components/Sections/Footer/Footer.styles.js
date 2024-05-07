const styles = {
  container: {
    '@media (min-width: 600px)': { paddingX: '12px', paddingTop: '180px', paddingBottom: '60px' },
  },
  link: (theme) => ({
    marginLeft: 0,
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '24px',
    color: theme.palette.common.white,
    textDecoration: 'none',
    flexBasis: '100%',
    textAlign: 'center',
    marginBottom: 20,
    '@media (min-width: 520px)': {
      marginLeft: 16,
      marginBottom: 0,
      textAlign: 'left',
    },
  }),
  copyright: (theme) => ({
    marginRight: 0,
    paddingTop:'26px',
    fontSize: 14,
    fontWeight: 600,
    lineHeight: '20px',
    color: theme.palette.neutral[200],
    textAlign: 'center',
    '@media (min-width: 768px)': {
      textAlign: 'left',
    },
  }),
  trademarks: (theme) => ({
    fontSize: 14,
    fontWeight: 600,
    lineHeight: '20px',
    paddingTop:'10px',
    color: theme.palette.neutral[300],
    textAlign: 'center',
    '@media (min-width: 768px)': {
      textAlign: 'left',
    },
  }),
  wrapperNav: {
    marginTop: 20,
    marginLeft: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent:' space-between',
    flexWrap: 'no-wrap',
    
    '@media (min-width: 768px)': {
      marginLeft: 'auto',
      
    },
    '@media (min-width: 520px)': {
      justifyContent:' space-between ',
      gridGap:'10px',
      whiteSpace: 'nowrap',
      alignItems: 'flex-end',
    },
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 20,
    '@media (min-width: 768px)': {
      alignItems: 'flex-end',
      flexDirection: 'row',
    },
  },
  footer: {
    paddingTop: 170,
    paddingBottom: 60,
  },
  logoBoy: {
    width: 30,
    height: 47,
    display: 'none',
    '@media (min-width: 768px)': {
      display: 'inline-block',
      marginRight:'36px',
      
    },
  },
  socialGroup: {
    margin: '0 auto',
    maxWidth: 200,
    display: 'flex',
    gridGap: 20,
    paddingLeft:'30px',
    '@media (min-width: 520px)': {
    },
  },
};
export default styles;
