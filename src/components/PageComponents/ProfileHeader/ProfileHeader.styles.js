const styles = {
  header: (theme) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingY: theme.spacing(3),
    paddingX: theme.spacing(4),
    width: '100%',
    backgroundColor: theme.palette.background.level2,
  }),
  toolbar: {
    justifyContent: 'space between',
  },
  logoBox: {
    flexGrow: 1,
    lineHeight: 0,
  },
  headerNav: (theme) => ({
    display: { xs: 'none', md: 'flex' },
    alignItems: 'center',
    gap: theme.spacing(4),
  }),
  input: {
    '& .MuiOutlinedInput-input': {
      paddingY: '8px!important',
      paddingX: '12px!important',
    },
    width: '276px',
  },
  userPhoto: {
    minWidth: 44,
    width: 44,
    height: 44,
    padding: 0,
  },
};
export default styles;