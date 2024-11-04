export const styles = {

  container: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    borderTopLeftRadius: theme.spacing(2),
    borderBottomLeftRadius: theme.spacing(2),
    paddingRight: theme.spacing(2),
  }),
  sidebarSection: (theme) => ({
    marginLeft: theme.spacing(2),
    
  }),
  scrollContainer: (theme) => ({
    overflow: 'auto',
    minWidth: '100%',
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(2),
    '&::-webkit-scrollbar': {
      width: 10,
    },
    '&::-webkit-scrollbar-track': (theme) => ({
      backgroundColor: theme.palette.background.level2,
      borderRadius: 8,
    }),
    '&::-webkit-scrollbar-thumb': (theme) => ({
      borderRadius: 6,
      backgroundColor: theme.palette.common.white,
    }),
  }),
};
