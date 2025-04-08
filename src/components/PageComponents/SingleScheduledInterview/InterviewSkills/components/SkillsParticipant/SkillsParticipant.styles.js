export const styles = {
  wrapper: (theme) => ({
    backgroundColor: theme.palette.interviewSkills.skillsBox,
    padding: theme.spacing(3),
    borderRadius: theme.spacing(1),
  }),
  title: {
    paddingBottom: 4,
  },
  divider: (theme) => ({
    marginY: theme.spacing(2),
    backgroundColor: theme.palette.background.level3,
  }),
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
  }),
};
