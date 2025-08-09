export const styles = {
  link: (theme) => ({
    color: theme.palette.settings.notifications.link.color,
    textDecoration: 'underline',
    transition: 'opacity 0.3s ease-in-out',
    cursor: 'pointer',
    pointerEvents: 'none',

    '&:hover': {
      opacity: 0.8,
    },
  }),
};
