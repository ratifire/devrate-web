export const styles = {
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
