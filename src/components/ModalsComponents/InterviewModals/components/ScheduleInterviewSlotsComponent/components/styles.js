export const styles = {
  timeGrid: (theme) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(3),
  }),
  tabsRow: (theme) => ({
    display: 'flex',
    width: '100%',
    ' .MuiTabs-indicator ': {
      backgroundColor: 'transparent',
    },
    '& .MuiTabs-flexContainer': {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      borderBottom: '1px solid',
      borderColor: theme.palette.scheduleInterview.modal.tab.borderColor,
    },
  }),
  weekHeading: (theme) => ({
    display: 'flex',
    justifyContent: 'center',
    gap: theme.spacing(3),
    width: '100%',
    alignItems: 'center',
    '>button': {
      borderRadius: 1,
    },
    '>.MuiTypography-root': {
      color: theme.palette.scheduleInterview.modal.color,
    },
    '& .MuiSvgIcon-root': {
      fill: theme.palette.scheduleInterview.modal.tab.arrows,
    },
  }),
  texts: (theme) => ({
    display: 'flex',
    width: '100%',
    gap: theme.spacing(3),
    justifyContent: 'space-between',
    alignItems: 'baseline',
  }),
  tab: (theme) => ({
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '32px',
    letterSpacing: '0.15ox',
    borderBottom: '1px solid',
    borderColor: 'transparent',
    color: theme.palette.scheduleInterview.modal.tab.color,
    textTransform: 'none',
    '&.Mui-disabled': {
      fontWeight: 500,
      fontSize: '20px',
      lineHeight: '32px',
      letterSpacing: '0.15px',
      color: theme.palette.scheduleInterview.modal.tab.disabled.color,
      textTransform: 'none',
    },
    '&.Mui-selected': {
      color: theme.palette.scheduleInterview.modal.tab.current.color,
      borderBottom: '1px solid',
      borderColor: theme.palette.scheduleInterview.modal.tab.current.borderColor,
      zIndex: 10,
    },
  }),
};
