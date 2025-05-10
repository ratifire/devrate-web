export const styles = {
  wrapper: (theme) => ({
    maxWidth: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    gap: theme.spacing(4),
    borderRadius: theme.spacing(2),
    padding: theme.spacing(4),
    backgroundColor: theme.palette.pagesSections.backgroundColor,
  }),
  section: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
    borderRadius: theme.spacing(1),
    padding: theme.spacing(3),
    border: `1px solid ${theme.palette.settings.notifications.section.border}`,
    backgroundColor: theme.palette.settings.notifications.section.backgroundColor,
  }),
  container: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
  }),
};
