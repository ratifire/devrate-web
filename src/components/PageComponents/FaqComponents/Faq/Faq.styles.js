export const styles = {
    wrapper: (theme) => ({
      width: '100%',
      padding: theme.spacing(4),
      paddingBottom: theme.spacing(0),
    }),
    title: (theme) => ({
      marginBottom: theme.spacing(4),
      color: theme.palette.faq.title,
    }),
    list: (theme) => ({
      maxHeight: '586px',
      height: '100%',
      overflowY: 'auto',
      paddingRight: theme.spacing(3),
      '&::-webkit-scrollbar': {
        width: 10,
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: theme.palette.scroll.scrollWrapp.backgroundColor,
        borderRadius: 8,
        marginLeft: '10px',
        paddingLeft: '10px',
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: 6,
        backgroundColor: theme.palette.scroll.scrollEl.backgroundColor,
      },
    }),
    accordion: (theme) => ({
      padding: theme.spacing(3),
      marginBottom: theme.spacing(4),
      borderRadius: 1,
      backgroundColor: theme.palette.faq.questions.backgroundColor,
      backgroundImage: 'none',
      boxShadow: `inset 0 0 0 1px ${theme.palette.faq.questions.boxShadow}`,
      '::before': {
        backgroundColor: 'transparent',
      },
      '.MuiButtonBase-root.Mui-expanded': {
        minHeight: 42,
      },
    }),
    accordionSummary: (theme) => ({
      padding: theme.spacing(0),
      minHeight: 42,
      '>div.MuiAccordionSummary-content': {
        margin: theme.spacing(0),
      },
      '>div.MuiAccordionSummary-content.Mui-expanded': {
        margin: theme.spacing(0),
      },
      '>.MuiAccordionSummary-expandIconWrapper': {
        color: theme.palette.faq.questions.icon.color,
      },
      '>.MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        color: theme.palette.faq.questions.icon.expanded,
      },
      ' h5': {
        color: theme.palette.faq.questions.question,
      },
    }),
    accordionDetails: (theme) => ({
      padding: theme.spacing(0),
      marginTop: '11px',
      ' .MuiTypography-root ': {
        color: theme.palette.faq.questions.answer,
      },
    }),
  }
;