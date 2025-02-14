export const styles = {
  interviewInfoWrapper: (theme) => ({
    paddingY: theme.spacing(3),
    paddingX: theme.spacing(4),
  }),
  interviewInfoTitleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  yearsAgo: (theme) => ({
    color: theme.palette.interviewInfo.yearsAgoColor,
  }),
  date: (theme) => ({
    display: 'block',
    width: '100%',
    color: theme.palette.interviewInfo.dateColor,
    paddingBottom: theme.spacing(2),
    borderBottom: `solid 1px ${theme.palette.interviewInfo.borderBottomColor}`,
    marginBottom: theme.spacing(2),
  }),
  interviewSpecializationTitleWrapper: (theme) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  }),
  interviewSpecialization: {},

  junior: (theme) => ({
    color: theme.palette.userCard.lvl.junior,
  }),
  middle: (theme) => ({
    color: theme.palette.userCard.lvl.middle,
  }),
  senior: (theme) => ({
    color: theme.palette.userCard.lvl.senior,
  }),
  role: (theme) => ({
    color: theme.palette.interviewInfo.roleColor,
    marginBottom: theme.spacing(1),
    textTransform: 'capitalize',
  }),
  hostWrapper: (theme) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  }),
  host: (theme) => ({
    marginRight: theme.spacing(1),
  }),
  hostName: (theme) => ({
    color: theme.palette.interviewInfo.hostNameColor,
  }),
  hostSpecialization: {},
};
