export const styles = {
  boxTitle: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  }),
  subTitle: {
    transition: 'opacity 0.2s ease-in-out',
  },
  accordion: {
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    boxShadow: 'none',
    '.MuiButtonBase-root.Mui-expanded': {
      minHeight: '42px',
      height: '42px',
    },
  },
  btn: (theme) => ({
    maxWidth: '228px',
    width: '100%',
    color: theme.palette.settings.general.deactivateBtn.color,
    border: `1px solid ${theme.palette.settings.general.deactivateBtn.color}`,
    transition: 'opacity 0.3s ease-in-out',

    '&:hover': {
      color: theme.palette.settings.general.deactivateBtn.color,
      border: `1px solid ${theme.palette.settings.general.deactivateBtn.color}`,
      opacity: 0.8,
    },
  }),
  accordionDetails: (theme) => ({
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
  }),
  accordionSummary: (theme) => ({
    minHeight: '72px',
    height: '72px',
    padding: 0,
    '& > span:first-of-type': {
      margin: '0 !important',
      height: '100%',
    },
    '& >.MuiAccordionSummary-expandIconWrapper': {
      position: 'absolute',
      top: '0',
      right: '0',
      color: theme.palette.faq.questions.icon.color,
    },
    '& .Mui-expanded .subTitle': {
      opacity: 0,
    },
    '& >.MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      color: theme.palette.faq.questions.icon.expanded,
    },
  }),
};
