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
    marginBottom: '20px',
    '@media (min-width: 520px)': {
      marginLeft: '16px',
      marginBottom: 0,
      textAlign: 'left',
    },
  }),
  wrapperNav: {
    marginTop: '20px',
    marginLeft: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: ' space-between',
    flexWrap: 'no-wrap',

    '@media (min-width: 768px)': {
      marginLeft: 'auto',
    },
    '@media (min-width: 520px)': {
      justifyContent: ' space-between ',
      gridGap: '10px',
      whiteSpace: 'nowrap',
      alignItems: 'flex-end',
    },
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    // display: 'flex',
    // alignItems: 'center',
    // flexDirection: 'column',
    // marginBottom: '20px',
    // '@media (min-width: 768px)': {
    //   alignItems: 'flex-end',
    //   flexDirection: 'row',
    // },
  },
  footer: {
    paddingTop: '170px',
    paddingBottom: '60px',
  },
  logoBoy: {
    width: 30,
    height: 47,
    display: 'none',
    '@media (min-width: 768px)': {
      display: 'inline-block',
      marginRight: '36px',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  socialGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '16px',
  },
  socialLinks: {
    display: 'flex',
    gap: '8px',
  },
  icon: (theme) => ({
    color: theme.palette.neutral[50],
    width: '30px',
    height: '30px',
  }),
  description: {
    width: '461px',
    fontWeight: '600',
    fontSize: '18px',
    lineHeight: '150%',
    margin: '0',
    marginBottom: '28px',
  },
  developed: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    marginBottom: '21px',
  },
  developTitle: {
    textTransform: 'uppercase',
    fontSize: '24px',
    fontWeight: '700',
  },
  ratifireLink: {
    fontWeight: '700',
    fontSize: '24px',
    textTransform: 'lowercase',
    marginBottom: '21px',
  },
  legalInformation: {
    display: 'flex',
    gap: '24px',
    fontWeight: '600',
    fontSize: '20px',
    marginBottom: '16px',
  },
  defaultStylesLinks: {
    textDecoration: 'underline',
    textDecorationSkipInk: 'none',
    color: '#B78AF7',
  },
  copyright: (theme) => ({
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: '20px',
    color: theme.palette.neutral[50],
    textAlign: 'center',
    marginBottom:'5px',
    '@media (min-width: 768px)': {
      textAlign: 'left',
    },
  }),
  trademarks: (theme) => ({
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: '150%',
    color: theme.palette.neutral[200],
    textAlign: 'center',
    '@media (min-width: 768px)': {
      textAlign: 'left',
    },
  }),
  contactForm: {
    width: '650px',
    backgroundColor: '#514e4e',
    padding: '36px',
    borderRadius: '16px',
  },
  contactFormTitle: {
    fontSize: '24px',
    lineHeight: '150%',
    marginBottom: '24px',
  },
  spanStyle: {
    color: '#B78AF7',
  },
  formInfo: {
    width: '100%',
  },
  inputStyles: {
    marginBottom: '16px',
    backgroundColor: '#1D1D1D',
    borderRadius: '4px',
  }


  // socialGroup: (theme) => ({
  //   color: theme.palette.neutral[50],
  //   margin: '0 auto',
  //   maxWidth: 200,
  //   display: 'flex',
  //   gridGap: '10px',
  //   paddingLeft: '30px',
  //   '@media (min-width: 520px)': {},
  // }),

};
export default styles;
