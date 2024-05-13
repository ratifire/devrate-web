

const styles = {
  title: (theme) => ({
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '24px',
    color: theme.palette.text.primary,
    textAlign: 'center',
    letterSpacing: '-1.1%',
    marginTop: 48,
    marginBottom: '30px',
  }),
  codeErrorWrapper: { display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 32 },
  codeErrorIcon: {
    width: '20px',
    height: '20px',
    color: '#B72F46CC',
  },
  codeErrorText: {
    marginLeft: 17,
    color: '#B72F46CC',
    fontSize: 15,
    lineHeight: 1.5,
    fontWeight: 400,
    letterSpacing: '1.1%',
  },
  mainTextWrapper: { display: 'flex', flexDirection: 'column', marginBottom: '32px' },
  mainText: {
    display: 'inline',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 1.5,
    color: '#F1F1F14D',
    letterSpacing: '-1.1%',
    textAlign: 'center',
  },
  userEmail: (theme) => ({
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1.5,
    color: theme.palette.text.primary,
    letterSpacing: '-1.1%',
  }),
  wrapperBtn: {
    marginTop: '32px',
    marginBottom: '37px',
  },
  spamCheckContainer: {
    marginBottom: '80px',
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1.5,
    color: '#F1F1F14D',
    textAlign: 'center',
    letterSpacing: '-1.1%',
  },
  turnBackContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  turnBackText: {
    marginRight: '10px',
    fontSize: 14,
    lineHeight: 1.43,
    color: '#F1F1F14D',
  },
  link: (theme) => ({
    fontSize: 14,
    lineHeight: 1.43,
    textDecoration: 'underline',
    color: theme.palette.text.primary,
    paddingY: 0,
    paddingX: 0,
    '&:hover': {
      textDecoration: 'underline',
    },
  }),
  // New styles for input fields
  input: {
    minWidth: 48,
    width: 48,
    textAlign: 'center',
    '& input': {
      padding: '10px',
      fontSize: '1rem',
      border: '1px solid #ced4da',
      borderRadius: '4px',
      backgroundColor: 'transparent',
      transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
      '&:focus': {
        outline: 'none',
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',
      },
    },
  },
};

export default styles;
