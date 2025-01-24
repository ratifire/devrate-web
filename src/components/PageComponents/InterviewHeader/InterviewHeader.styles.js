const styles = {
  interviewHeader: (theme) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingY: '24px',
    paddingX: theme.spacing(3),
    marginBottom: theme.spacing(5),
    width: '100%',
    backgroundImage: 'none',
    backgroundColor: theme.palette.interviewPage.bgColor,
    boxShadow: 'none',
    '@media (min-width: 1272px)': {
      paddingY: theme.spacing(3),
      paddingX: theme.spacing(4),
    },
  }),
  interviewNavLinksBox: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid',
    borderColor: theme.palette.neutral[400],
  }),
  interviewNavLink: (theme) => ({
    display: 'inline-block',
    textDecoration: 'none',
    color: theme.palette.text.secondary,
    paddingBottom: '10px',
    paddingRight: '20px',
    textTransform: 'none',
    fontSize: 20,
    fontWeight: '500',
    borderBottom: '2px solid transparent',
    transition: 'color 0.5s ease, border-bottom 0.5s ease',
    '&:hover': {
      color: theme.palette.action.hover,
    },
    '&.active': {
      color: theme.palette.action.active,
      borderBottom: '2px solid ' + theme.palette.action.active,
    },
    '&:not(:first-of-type)': {
      paddingLeft: '20px',
    },
  }),
  buttonPrimary: (theme) => ({
    fontSize: 14,
    textTransform: 'none',
    fontWeight: 500,
    maxWidth: '330px',
    letterSpacing: '0.1px',
    gridGap: theme.spacing(2),
    backgroundColor: theme.palette.scheduleInterview.area.btn.backgroundColor,
    paddingY: '10px',
    '&:disabled': {
      backgroundColor: theme.palette.background.btnGroup,
    },
    '&[data-active="true"]': {
      borderRadius: '4px 4px 0 0',
    },
  }),
  popoverWrapper: (theme) => ({
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: theme.palette.scheduleInterview.area.popover.backgroundColor,
  }),
  popover: (theme) => ({
    '>.MuiPaper-root': {
      borderRadius: '0 0 4px 4px',
      backgroundColor: theme.palette.scheduleInterview.area.popover.backgroundColor,
      boxShadow: 'none',
      maxWidth: 600,
      width: '100%',
    },
  }),
  divider: (theme) => ({
    borderColor: theme.palette.scheduleInterview.area.popover.borderColor,
  }),
  menuButton: (theme) => ({
    color: theme.palette.scheduleInterview.area.popover.btn.color,
    fontSize: 14,
    textTransform: 'none',
    fontWeight: 500,
    display: 'flex',
    ':hover': {
      backgroundColor: theme.palette.scheduleInterview.area.popover.backgroundColor,
    },
  }),
  greenEllipce: {
    marginRight: '8px',
    marginLeft: '8px',
    width: '13px',
    height: '13px',
  },
};

export default styles;
