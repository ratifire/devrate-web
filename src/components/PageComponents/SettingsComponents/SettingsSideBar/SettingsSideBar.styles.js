export const styles = {
  wrapper: (theme) => ({
    maxWidth: '354px',
    width: '100%',
    padding: theme.spacing(4),
    display: 'flex',
    borderRadius: theme.spacing(2),
    flexDirection: 'column',
    gap: theme.spacing(4),
    backgroundColor: theme.palette.pagesSections.backgroundColor,
    minHeight: 'calc(100vh - 124px)',
  }),
  input: {
    maxWidth: '306px',
    width: '100%',
    '& .MuiOutlinedInput-input': {
      paddingY: '8px!important',
      paddingX: '12px!important',
    },
  },
  list: {},
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
