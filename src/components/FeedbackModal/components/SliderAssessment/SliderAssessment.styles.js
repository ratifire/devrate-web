export const styles = {
  title: (theme) => ({
    color: theme.palette.text.primary,
    fontSize: '16px'
  }),
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
    marginTop: '24px'
  },
  box: {
    maxWidth: '300px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  },
  slider: {
    color: 'rgb(129, 51, 241)', // Цвет ползунка
    '& .MuiSlider-thumb': {
      backgroundColor: 'rgb(129, 51, 241)', // Цвет кружка
      height: 12,
      width: 12,
    },
    '& .MuiSlider-mark': {
      color: '#C5C5C6', // Цвет меток
      height: 4,
      width: 4,
    },
    '& .MuiSlider-track': {
      color: 'rgb(129, 51, 241)', // Цвет трека
      height: '8px'
    },
    '& .MuiSlider-rail': {
      color: 'gray', // Цвет фона
    },
  },
  divider: {
    borderColor: '#69696B',
  }
}
