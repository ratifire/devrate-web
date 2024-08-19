export const styles = {
  title: (theme) => ({
    color: theme.palette.text.primary,
    fontSize: '16px',
    maxWidth: '330px',
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }),
  subtitle: (theme) => ({
    color: theme.palette.sliderAssessment.lightGray,
    width: '44px',
    textAlign: 'right',
  }),
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    // paddingTop: '24px',
  },
  box: {
    maxWidth: '239px',
    width: '100%',
    display: 'flex',
    gap: '15px',
    alignItems: 'center',
    position: 'relative',
  },
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
    // paddingTop: '8px',
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
    right: '39px',
    borderTopRightRadius: '12px',
    borderBottomRightRadius: '12px',
    backgroundColor: theme.palette.sliderAssessment.gray,
  }),
  rightActive: (theme) => ({
    backgroundColor: theme.palette.sliderAssessment.violet,
    height: '9.6px',
  }),
};
