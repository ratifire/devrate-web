export const styles = {
  container: (theme) => ({
    paddingY: theme.spacing(3),
    paddingX: theme.spacing(3),
    '@media (min-width: 600px)': {
      paddingY: theme.spacing(4),
      paddingX: theme.spacing(4),
    },
    '@media (min-width: 1272px)': {
      maxWidth: '120rem',
    },
  }),
  contentWrapper: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gridGap: theme.spacing(3),
    minHeight: 'calc(100vh - 192px)',
    backgroundColor: theme.palette.pagesSections.backgroundColor,
    marginTop: '-8px',
    padding: theme.spacing(4),
  }),
  emptySpec: {
    flexDirection: 'row',
    gap: '42px',
  },
  text: {
    maxWidth: '45.75rem',
    fontSize: '1.25rem',
    lineHeight: '160%',
    letterSpacing: '0.01em',
    fontWaight: '500',
  },
  contentBox: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
  }),
  textSpec: {
    maxWidth: '37.875rem',
  },
  specBtn: (theme) => ({
    fontSize: 14,
    textTransform: 'none',
    fontWeight: 500,
    maxWidth: '16.875rem',
    letterSpacing: '0.1px',
    gridGap: theme.spacing(2),
    backgroundColor: theme.palette.scheduleInterview.area.btn.backgroundColor,
    paddingY: '10px',
    alignSelf: 'center',

    '&:disabled': {
      backgroundColor: theme.palette.background.btnGroup,
    },
    '&[data-active="true"]': {
      borderRadius: '4px 4px 0 0',
    },
  }),
};
