export const styles = {
  wrapper: (theme) => ({
    backgroundColor: theme.palette.interviewSkills.skillsBox,
    padding: theme.spacing(3),
    borderRadius: theme.spacing(1),
  }),
  title: {
    paddingBottom: 4,
  },
  accordion: {
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    boxShadow: 'none',
    '.MuiButtonBase-root.Mui-expanded': {
      minHeight: '32px',
      height: '32px',
    },
  },
  accordionSummary: (theme) => ({
    minHeight: '32px',
    height: '32px',
    padding: 0,
    '>.MuiAccordionSummary-expandIconWrapper': {
      color: theme.palette.faq.questions.icon.color,
    },
    '& >.MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      color: theme.palette.faq.questions.icon.expanded,
    },
  }),
};
