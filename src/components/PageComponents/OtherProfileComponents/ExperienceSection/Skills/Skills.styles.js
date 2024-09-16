export const styles = {
  wrapper: () => ({
    display: 'flex',
    justifyContent: 'space-between',
    gridGap: '20px',
    marginTop: '20px',
  }),
  info: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: theme.spacing(3),
    position: 'relative',
    zIndex: 10,
  }),
  skill:(theme) => ({
    flex: '0 1 max(679px)',
    paddingY: theme.spacing(3),
    paddingX: theme.spacing(4),
    backgroundColor: theme.palette.neutral['600'],
    borderRadius: 2,
  }),
  skillBg:(theme) => ({
    flex: '0 1 max(679px)',
    paddingY: theme.spacing(3),
    paddingX: theme.spacing(4),
    backgroundColor: theme.palette.neutral['600'],
    borderRadius: 2,
    position: 'relative',
    ':before':{
      content: '""',
      borderRadius: 2,
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: `${theme.palette.background.default}66`,
    },
  }),
  search: {
    flex: '0 1 max(333px)',
    position: 'relative',
  },
  
  wrapperSelect:(theme) => ({
    display: 'flex',
    alignItems: 'center',
    gridGap: theme.spacing(2),
  }),
  star: (theme) => ({
    color: theme.palette.primary['200'],
  }),
  select:(theme) => ({
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
  selectPaper:(theme)=>({
    backgroundColor: theme.palette.neutral['800'],
    paddingX: theme.spacing(2),
    ' .MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.Mui-selected':{
      backgroundColor: theme.palette.neutral['800'],
      ':hover': {
        backgroundColor: theme.palette.neutral['800'],
      },
    },
  }),
  selectItem:(theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14px',
    lineHeight: '22px',
    fontWeight: 500,
    letterSpacing: 0.1,
    color: theme.palette.neutral['100'],
    borderBottom: `1px solid ${theme.palette.neutral['600']}`,
    paddingY: '12px',
    paddingX: theme.spacing(2),
    ':last-of-type': {
      borderBottom: `1px solid transparent`,
    },
    ':hover': {
      backgroundColor: theme.palette.neutral['800'],
    },
  }),
  selectItemStar: (theme) =>({
    color: theme.palette.primary['200'],
    fontSize: '14px',
  }),
  list: {
    columnGap: '32px',
  },
  text: (theme) => ({
    textTransform: 'capitalize',
    '&.Junior': {
      color: theme.palette.info.main,
    },
    '&.Middle': {
      color: theme.palette.info.azure,
    },
    '&.Senior': {
      color: theme.palette.warning.main,
    },
    '&:first-letter': {
      textTransform: 'uppercase',
    },
  }),
  btnIcon: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  textArea:(theme)=> ({
    marginBottom: theme.spacing(0),
    width: '100%',
    height: '100%',
    ' *': {
      width: '100%',
      height: '100%',
    }
  }),
};