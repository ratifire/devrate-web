export const styles = {
  sideBarEventContainer: (theme) => ({
    height: '185px', //162px changed to 185px due to adding line of role
    backgroundColor: theme.palette.schedule.sideBarEvent.backgroundColor,
    borderRadius: 2,
    padding: theme.spacing(3),
    paddingRight: theme.spacing(3),
    marginBottom: theme.spacing(2),
  }),
  title: (theme) => ({
    color: theme.palette.schedule.sideBarEvent.titleColor,
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
    color: theme.palette.schedule.sideBarEvent.dateAndTimeColor,
  }),
  host: (theme) => ({
    color: theme.palette.schedule.sideBarEvent.hostColor,
    marginBottom: theme.spacing(2),
  }),
  participant: (theme) => ({
    color: theme.palette.schedule.sideBarEvent.participant,
    marginBottom: theme.spacing(2),
  }),
  hostTitle: (theme) => ({
    lineHeight: '19.92px',
    letterSpacing: '0.4px',
    color: theme.palette.schedule.sideBarEvent.hostTitle,
    marginBottom: theme.spacing(2),
  }),
  host_link: (theme) => ({
    color: theme.palette.schedule.sideBarEvent.hostLinkColor,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.primary[300],
    },
  }),
  participant_link: (theme) => ({
    color: theme.palette.schedule.sideBarEvent.participantlinkColor,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.primary[300],
    },
  }),
  cancelEventBtn: (theme) => ({
    color: theme.palette.schedule.sideBarEvent.cancelEventBtnColor,
  }),
};
