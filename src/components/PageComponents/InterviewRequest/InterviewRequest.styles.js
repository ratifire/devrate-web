export const styles = {
  container: {
    // maxWidth: '1488px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '18px',
  },
  select: (theme) => ({
    width: '224px',
    ' .MuiSelect-select.MuiSelect-standard.MuiInputBase-input.MuiInput-input': {
      paddingRight: '34px',
      paddingY: theme.spacing(0),
      fontSize: '20px',
      lineHeight: '32px',
      fontWeight: 500,
      letterSpacing: 0.15,
      backgroundColor: 'transparent',
    },
    ' div>svg': {
      display: 'none',
    },
    ':not(.Mui-disabled, .Mui-error):hover:before': {
      borderBottom: 'none',
    },
    ':not(.Mui-disabled, .Mui-error):before': {
      borderBottom: 'none',
    },
    ':after': {
      borderBottom: 'none',
    },
  }),
  selectPaper: (theme) => ({
    backgroundColor: theme.palette.modals.select.selectedField.backgroundColor,
    paddingX: theme.spacing(2),
    ' .MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.Mui-selected': {
      backgroundColor: theme.palette.modals.select.selectedField.selected.backgroundColor,
      ':hover': {
        backgroundColor: theme.palette.modals.select.selectedField.hover,
      },
    },
  }),
  selectItem: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14px',
    lineHeight: '22px',
    fontWeight: 500,
    letterSpacing: 0.1,
    color: theme.palette.modals.select.selectedField.selected.color,
    borderBottom: `1px solid ${theme.palette.neutral['600']}`,
    paddingY: '12px',
    paddingX: theme.spacing(2),
    ':last-of-type': {
      borderBottom: `1px solid transparent`,
    },
    ':hover': {
      backgroundColor: theme.palette.modals.select.selectedField.hover,
    },
  }),
};
