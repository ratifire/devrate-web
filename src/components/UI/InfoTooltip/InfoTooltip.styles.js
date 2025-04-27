export const styles = {
  iconBtn: (theme) => ({
    color: theme.palette.infoIcon.color,
    backgroundColor: theme.palette.infoIcon.backgroundColor,
    transition: 'background-color 0.3s, transform 0.3s',
    ':hover': {
      color: theme.palette.infoIcon.hover.color,
      backgroundColor: theme.palette.infoIcon.hover.backgroundColor,
    },
  }),
};
