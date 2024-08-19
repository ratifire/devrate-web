export const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '28px',
  },
  title: (theme) => ({
    color: theme.palette.text.primary,
    fontWeight: 500,
  }),
  data: (theme) => ({
    fontSize: '14px',
    fontWeight: 500,
    color: theme.palette.text.primary,
    display: 'flex',
    justifyContent: 'space-between',
    gap: '4px',
    alignItems: 'center',
  }),
  icon: {
    width: '14px',
    height: '14px',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  }
}
