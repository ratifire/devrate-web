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
    gap: theme.spacing(3),
    borderRadius: theme.spacing(1),
    padding: theme.spacing(3),
    border: `1px solid ${theme.palette.settings.notifications.section.border}`,
    backgroundColor: theme.palette.settings.notifications.section.backgroundColor,
  }),
  link: (theme) => ({
    color: theme.palette.settings.notifications.link.color,
    textDecoration: 'underline',
    transition: 'opacity 0.3s ease-in-out',
    cursor: 'pointer',

    '&:hover': {
      opacity: 0.8,
    },
  }),
  switchBox: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
  },
  switch: (theme) => ({
    '& .Mui-checked': {
      color: theme.palette.settings.notifications.switch.circle.backgroundColor,
    },
    '& .MuiSwitch-track': {
      backgroundColor: theme.palette.settings.notifications.switch.track.backgroundColor,
      border: `1px solid ${theme.palette.settings.notifications.switch.track.border}`,
    },
    '& .Mui-checked+.MuiSwitch-track': (theme) => ({
      backgroundColor: theme.palette.settings.notifications.switch.track.backgroundColor,
      border: `1px solid ${theme.palette.settings.notifications.switch.track.border}`,
    }),
  }),
};
