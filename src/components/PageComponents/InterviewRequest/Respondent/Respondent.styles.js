export const styles = {
  container: (theme) => ({
    padding: theme.spacing(3),
    backgroundColor: '#3E3E40',
    borderRadius: theme.spacing(2),
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
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
