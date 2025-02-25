export const styles = {
  container: (theme) => ({
    padding: theme.spacing(3),
    backgroundColor: theme.palette.requestInterview.participant.backgroundColor,
    borderRadius: theme.spacing(2),
    boxShadow: `0 2px 4px rgba(0, 0, 0, 0.1), inset 0 0 0 1px ${theme.palette.requestInterview.participant.borderShadow}`,
    marginBottom: theme.spacing(3),
  }),
  header: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
  }),
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
  statsContainer: {
    display: 'flex',
    gap: '16px',
    marginBottom: '16px',
  },
};
