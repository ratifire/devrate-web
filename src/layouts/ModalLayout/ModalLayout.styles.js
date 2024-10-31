export const styles = {
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    padding: '22px 16px',
    backgroundColor: '#1D1D1D',
    borderRadius: '6px',
    width: '95%',
    '@media (min-width: 580px)': {
      width: 570,
      padding: '26px 36px',
    },
  },
  iconContainer: {
    width: 147,
    height: 18,
    marginBottom: '48px',
  },
};
