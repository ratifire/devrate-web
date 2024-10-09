export const styles = {
  grey: (theme) => ({
    color: theme.palette.iconBtn.createBtn.color,
    backgroundColor: theme.palette.iconBtn.createBtn.backgroundColor,
    ':hover': {
      backgroundColor: theme.palette.iconBtn.createBtn.hover.backgroundColor,
      color: theme.palette.iconBtn.createBtn.hover.color,
    },
  }),

  purple: (theme) => ({
    color: theme.palette.iconBtn.editBtn.color,
    backgroundColor: theme.palette.iconBtn.editBtn.backgroundColor,
    ':hover': {
      backgroundColor: theme.palette.iconBtn.editBtn.hover.backgroundColor,
      color: theme.palette.iconBtn.editBtn.hover.color,
    },
  }),

  black: (theme) => ({
    color: theme.palette.iconBtn.burgerDot.color,
    backgroundColor: theme.palette.iconBtn.burgerDot.backgroundColor,
    ':hover': {
      backgroundColor: theme.palette.iconBtn.burgerDot.hover.backgroundColor,
      color: theme.palette.iconBtn.burgerDot.hover.color,
    },
  }),

  btnIcon: {
    borderRadius: 1,
    transition: 'background-color 0.3s, transform 0.3s',
    svg: {
      fontSize: '18px',
    },
  },
};