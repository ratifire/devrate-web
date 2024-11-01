export const styles = {
  newsAgreementText: (theme) => ({
    // fontFamily: 'Open Sans',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: 1.5,
    color: theme.palette.text.primary,
  }),
  checkBox: (theme) => ({
    color: theme.palette.disabled,
    '&.Mui-checked': {
      color: theme.palette.disabled,
    },
  }),
  checkBoxWorkExperience: (theme) => ({
    color: theme.palette.disabled,
    '&.Mui-checked': {
      color: theme.palette.sliderAssessment.violet,
    },
  }),
  newsAgreementTextWorkExperience: (theme) => ({
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
    color: theme.palette.text.primary,
  }),
};
