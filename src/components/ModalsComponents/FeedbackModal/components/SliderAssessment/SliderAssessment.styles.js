export const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  box: (theme) => ({
    maxWidth: '239px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    gap: theme.spacing(1),
    alignItems: 'center',
    position: 'relative',
  }),
  grade: (theme) => ({
    color: theme.palette.sliderAssessment.lightGray,
    width: '44px',
    textAlign: 'right',
  }),
  slider: (theme) => ({
    color: theme.palette.sliderAssessment.violet, // Цвет ползунка
    maxWidth: '180px',
    borderRadius: '0px',

    '& .MuiSlider-thumb': {
      backgroundColor: theme.palette.sliderAssessment.thumb, // Цвет кружка
      height: 12,
      width: 12,
      borderRadius: '50%',
    },
    '& .MuiSlider-mark': {
      color: theme.palette.sliderAssessment.lightGray, // Цвет меток
      width: '4px',
      height: '4px',
      borderRadius: '50%',
    },
    '& .MuiSlider-track': {
      color: theme.palette.sliderAssessment.violet, // Цвет трека
      height: '8px',
    },
    '& .MuiSlider-rail': {
      color: theme.palette.sliderAssessment.gray, // Цвет фона
      height: '8px',
      opacity: 1,
    },

    '& .MuiSlider-valueLabel': {
      // Метка
      width: '22px',
      height: '21px',
      borderRadius: '0',
      backgroundColor: theme.palette.sliderAssessment.darkGray,

      '& > span': {
        color: theme.palette.sliderAssessment.lightGray,
        fontSize: '14px',
      },
    },
    '& .MuiSlider-valueLabel.MuiSlider-valueLabelOpen': {
      transform: 'translateY(-80%) scale(1)',
    },
  }),
  divider: {
    borderColor: '#69696B',
  },
  left: (theme) => ({
    position: 'absolute',
    width: '25px',
    height: '9.6px',
    left: '-21px',
    borderTopLeftRadius: '12px',
    borderBottomLeftRadius: '12px',
    backgroundColor: theme.palette.sliderAssessment.violet,
  }),
  right: (theme) => ({
    position: 'absolute',
    width: '20px',
    height: '8px',
    right: '53px',
    borderTopRightRadius: '12px',
    borderBottomRightRadius: '12px',
    backgroundColor: theme.palette.sliderAssessment.gray,
  }),
  rightActive: (theme) => ({
    backgroundColor: theme.palette.sliderAssessment.violet,
    height: '9.6px',
  }),
};
