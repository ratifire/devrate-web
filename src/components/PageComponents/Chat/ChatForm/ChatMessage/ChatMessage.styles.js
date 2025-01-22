export const styles = {
  wrapper: {
    padding: '8px 16px',
    marginBottom: '16px',
  },
  sender: {
    backgroundColor: '#444446',
    borderRadius: '0 16px 16px 16px',
    maxWidth: 'calc(100% - 28px)',
    marginRight: 'auto',
    ' >.MuiTypography-body': {
      color: '#ffffff',
      wordWrap: 'break-word',
    },
    ' svg': {
      fontSize: '24px',
      color: '#290064',
    },
    ' span': {
      color: '#C5C5C6',
    },
    '@media (min-width: 1272px)': {
      maxWidth: 'calc(100% - 100px)',
    },
  },
  message: {
    backgroundColor: '#CEB0FA',
    borderRadius: '16px 0 16px 16px',
    maxWidth: 'calc(100% - 28px)',
    marginLeft: 'auto',
    ' >.MuiTypography-body': {
      color: '#1D1D1D',
      wordWrap: 'break-word',
    },
    ' svg': {
      fontSize: '24px',
      color: '#290064',
      marginLeft: '8px',
    },
    ' span': {
      color: '#290064',
    },
    '@media (min-width: 1272px)': {
      maxWidth: 'calc(100% - 100px)',
    },
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
};
