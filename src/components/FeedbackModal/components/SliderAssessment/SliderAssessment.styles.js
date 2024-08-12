export const styles = {
  title: (theme) => ({
    color: theme.palette.text.primary,
    fontSize: '16px',
  }),
  subtitle: (theme) => ({
    color: theme.palette.text.primary,
    width: '44px',
    backgroundColor: 'red',

  }),
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  box: {
    maxWidth: '308px',
    width: '100%',
    display: 'flex',
    gap: '4px',
    alignItems: 'center',
  },
  slider: (theme) => ({
    color: theme.palette.sliderAssessment.violet, // Цвет ползунка
    maxWidth: '220px',
    '& .MuiSlider-thumb': {
      backgroundColor: theme.palette.sliderAssessment.thumb, // Цвет кружка
      height: 12,
      width: 12,
    },
    '& .MuiSlider-mark': {
      color: theme.palette.sliderAssessment.lightGray, // Цвет меток
      width: '4px',
      height: '4px',
    },
    '& .MuiSlider-track': {
      color: theme.palette.sliderAssessment.violet, // Цвет трека
      height: '8px',
    },
    '& .MuiSlider-rail': {
      color: theme.palette.sliderAssessment.gray, // Цвет фона
      height: '8px',
    },
    '& .MuiSlider-valueLabel': { // Метка
      width: '22px',
      height: '21px',
      color: theme.palette.sliderAssessment.darkGray,

      '& > span': {
        color: theme.palette.sliderAssessment.lightGray,
        fontSize: '14px'
      },
    },
  }),
  divider: {
    borderColor: '#69696B',
  }
}
