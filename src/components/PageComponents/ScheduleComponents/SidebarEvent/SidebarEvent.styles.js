export const styles = {
  sideBarEventContainer: (theme) => ({
    height: '185px', //162px changed to 185px due to adding line of participant
    backgroundColor:theme.palette.mode==='dark'? theme.palette.neutral[500]:theme.palette.sliderAssessment.darkGray,
    borderRadius: 2,
    padding: theme.spacing(3),
    paddingRight: theme.spacing(3),
    marginBottom: theme.spacing(2),
  }),
  title: (theme)=>({
    color:theme.palette.mode==='dark'?theme.palette.text.primary:theme.palette.text.secondary,
    '&::first-letter': {
      textTransform: 'uppercase',
      
    },
  }),
  titleDateTimeBox: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  }),
  dateAndTime: (theme) => ({
    color: theme.palette.mode==='dark' ? theme.palette.primary[50]:theme.palette.neutral[400],
  }),
  host: (theme) => ({
    color: theme.palette.mode==='dark' ? theme.palette.primary[50] : theme.palette.neutral[500],
    marginBottom: theme.spacing(2),
  }),
  participant: (theme) => ({
    color: theme.palette.mode==='dark' ? theme.palette.primary[50] : theme.palette.neutral[500],
    marginBottom: theme.spacing(2),
  }),
  hostTitle: (theme) => ({
    lineHeight: '19.92px',
    letterSpacing: '0.4px',
    color: theme.palette.mode==='dark' ? theme.palette.primary[50] : theme.palette.neutral[500],
    marginBottom: theme.spacing(2),
  }),
  host_link: (theme) => ({
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.action.hover,
    },
  }),
  participant_link: (theme) => ({
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.action.hover,
    },
  }),
  cancelEventBtn: (theme) => ({
    color: theme.palette.primary[100],
  }),
};
