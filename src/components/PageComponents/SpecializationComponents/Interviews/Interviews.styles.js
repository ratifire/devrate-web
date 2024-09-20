export const styles = {
  contentWrapper: (theme) => ({
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
  }),
  stats: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
  }),
  interviewItemIncome: (theme) => ({
    display: 'flex',
    gap: theme.spacing(1),
    color: theme.palette.info.azure,
  }),
  interviewItemOutcome: (theme) => ({
    display: 'flex',
    gap: theme.spacing(1),
    color: theme.palette.info.main,
  }),
  interviewType: {
    display: 'flex',
    width: '100%',
  },
  interviewCounter: {},
  buttons: (theme) => ({
    display: 'flex',
    gap: theme.spacing(4),
  }),
  buttonPrimary: () => ({
    fontSize: 14,
    textTransform: 'none',
    fontWeight: 500,
    borderRadius: '4px 4px 0 0',
    width: '100%',
  }),
  popoverWrapper: (theme) => ({
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: theme.palette.neutral[800],
  }),
  popover: (theme) => ({
    '& .MuiPaper-root.MuiPopover-paper.css-4w3m95-MuiPaper-root-MuiPopover-paper': {
      borderRadius: '0 0 4px 4px',
      backgroundColor: theme.palette.neutral[800],
      maxWidth: '432px',
      width: 'inherit',
    },
  }),
  divider: (theme) => ({
    borderColor: theme.palette.neutral[600],
  }),
  menuButton: (theme) => ({
    color: theme.palette.primary[100],
    fontSize: 14,
    textTransform: 'none',
    fontWeight: 500,
    paddingX: theme.spacing(5),
  }),
};
