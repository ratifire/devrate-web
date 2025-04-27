export const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    marginBottom: '24px',
  },
  selectingAuth: {
    maxWidth: '100%',
    width: '100%',
    display: 'flex',
    gap: '8px',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  divider: {
    width: '45%',
  },
  subtitle: {
    maxWidth: '5%',
    fontSize: '18px',
    fontWeight: 600,
    fontFamily: 'Open Sans, sans-serif',
    letterSpacing: '0.15px',
    color: '#828283',
  },
  authLinks: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '16px',
  },
  authLink: {
    maxWidth: '50%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    fontSize: '18px',
    color: '#FFF',
    fontFamily: 'Open Sans, sans-serif',
    padding: '12px 24px',
    borderRadius: '86px',
    backgroundColor: 'rgba(68, 68, 70, 0.20)',
    border: '1px solid #444446',
    transition: 'background-color 0.3s ease',

    '&:hover': {
      backgroundColor: 'rgba(68, 68, 70, 0.30)',
    },
  },
};
