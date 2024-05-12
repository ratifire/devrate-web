export const styles = {
  wrapper: (theme) => ({
    backgroundColor: theme.palette.primary[100],
    padding: theme.spacing(1),
    borderRadius: 4,
    display: 'flex',
  }),
  language: (theme) => ({
    backgroundColor: theme.palette.primary[600],
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '12px',
    color: theme.palette.text.primary,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
  }),
  level: (theme) => ({
    lineHeight: '18px',
    color: theme.palette.primary[800],
    padding: '3px 6px',
  }),
};