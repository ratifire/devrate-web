export const styles = {

  container: (theme) => ({
    background: theme.palette.sliderAssessment.darkGray,
    // borderRight: '1px solid #d3e2e8',
    borderTopLeftRadius: theme.spacing(2),
    borderBottomLeftRadius: theme.spacing(2),
    paddingRight: theme.spacing(2),
  }),
  sidebarSection: (theme) => ({
    marginLeft: theme.spacing(2),
    maxHeight: 'calc(100vh - 270px)',
  }),
  scrollContainer: (theme) => ({
    overflow: 'auto',
    maxHeight: 270, // to be adjusted with designers
    minWidth: '100%',
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
 