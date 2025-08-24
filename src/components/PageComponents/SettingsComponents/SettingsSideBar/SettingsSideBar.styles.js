export const styles = {
  listItem: (theme) => ({
    padding: '8px 0',
    fontSize: '20px',
    borderBottom: `1px solid ${theme.palette.modalDropdown.divider}`,

    '& > a': {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '5px',
      textDecoration: 'none',
      color: 'inherit',
    },

    '& > a.active svg': {
      fill: theme.palette.settings.link.active,
    },

    '& > a.active': {
      color: theme.palette.settings.link.active,
    },
  }),
};
