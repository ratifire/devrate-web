const styles = {
  interviewHeader: (theme) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '24px',
    paddingBottom: '12px',
    paddingX: theme.spacing(3),
    width: '100%',
    backgroundImage: 'none',
    backgroundColor: theme.palette.interviewPage.bgColor,
    boxShadow: 'none',
    '@media (min-width: 1272px)': {
      paddingY: theme.spacing(3),
      paddingX: theme.spacing(4),
    },
    maxWidth: '1920px',
    margin: '0 auto',
  }),
  interviewNavLinksBox: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid',
    borderColor: theme.palette.neutral[400],

    '& span': {
      cursor: 'pointer',
      userSelect: 'none',
      color: theme.palette.action.active,
      borderBottom: '2px solid ' + theme.palette.action.active,
      display: 'inline-block',
      textDecoration: 'none',
      paddingBottom: '10px',
      paddingRight: '20px',
      textTransform: 'none',
      fontSize: 20,
      fontWeight: '500',
      transition: 'color 0.5s ease, border-bottom 0.5s ease',
      '& + *': {
        paddingLeft: '20px',
      },
    },
  }),
  interviewNavLink: (theme, interviewStatus) => ({
    position: 'relative',
    display: 'inline-block',
    textDecoration: 'none',
    color: theme.palette.text.secondary,
    paddingBottom: '10px',
    paddingRight: '20px',
    paddingLeft: interviewStatus ? '42px' : '20px',
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
    ...(!!interviewStatus && {
      '&::before': {
        content: "''",
        position: 'absolute',
        top: '8px',
        left: '20px',
        width: '14px',
        height: '14px',
        backgroundColor:
          interviewStatus === 'IN_PROGRESS'
            ? theme.palette.scheduleInterview.statusColors.inProgress
            : theme.palette.scheduleInterview.statusColors.activeScheduledInterviews,
        borderRadius: '50%',
        cursor: 'default',
      },
    }),
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
  greenEllipse: {
    marginRight: '8px',
    marginLeft: '8px',
    width: '13px',
    height: '13px',
  },
};

export default styles;
