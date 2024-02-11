export const styles = {
  modal: () => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  modalContainer: () => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '22px 16px',
    backgroundColor: '#1D1D1D',
    borderRadius: '6px',
    width: '95%',
    '@media (min-width: 580px)': {
      width: 526,
      padding: '55px 78px',
    },
  }),
  iconContainer: () => ({
    width: 147,
    height: 18,
  }),
};
