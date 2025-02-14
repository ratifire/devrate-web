export const styles = {
  container: {
    padding: '16px',
    backgroundColor: '#3E3E40',
    borderRadius: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  dayGroup: {
    marginBottom: '16px',
  },
  dayTitle: {
    fontSize: '16px',
    fontWeight: '500',
    marginBottom: '8px',
  },
  buttons: {
    display: 'flex',
  },
  iconDelete: {
    color: '#FF2E2E',
  },
  outlined: (theme) => ({
    width: '216px',
    marginLeft: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    paddingY: '13px',
    paddingX: '22px',
    color: theme.palette.iconBtn.bookInterview.color,
    fontFamily: theme.typography.fontFamily,
    border: `1px solid ${theme.palette.iconBtn.bookInterview.borderColor}`,
    textTransform: 'lowercase',
    '&::first-letter': {
      textTransform: 'uppercase',
    },
    '&:hover': {
      backgroundColor: theme.palette.iconBtn.bookInterview.hover.backgroundColor,
      borderColor: theme.palette.iconBtn.bookInterview.hover.borderColor,
      color: theme.palette.iconBtn.bookInterview.hover.color,
    },
  }),
  statItem: {
    fontSize: '14px',
    color: '#ECECED',
  },
  statsContainer: {
    display: 'flex',
    gap: '16px',
    marginBottom: '16px',
  },
};
