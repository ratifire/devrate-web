export const styles = {
  interviewInfoWrapper: (theme) => ({
    paddingY: theme.spacing(3),
    paddingX: theme.spacing(4),
    height: '100%',
    borderRadius: theme.spacing(2),
    backgroundColor: theme.palette.pagesSections.backgroundColor,
    boxShadow: 'none',
    backgroundImage: 'none',
  }),
  interviewInfoTitleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  interviewInfoTitle: (theme) => ({
    color: theme.palette.interviewInfo.interviewInfoTitleColor,
  }),
  yearsAgo: (theme) => ({
    fontWeight: 400,
    color: theme.palette.interviewInfo.yearsAgoColor,
  }),
  date: (theme) => ({
    display: 'block',
    width: '100%',
    fontWeight: 400,
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
  interviewSpecialization: (theme) => ({
    color: theme.palette.interviewInfo.interviewSpecializationTextColor,
  }),

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
    color: theme.palette.interviewInfo.roleColor,
    marginRight: theme.spacing(1),
  }),
  hostLink: (theme) => ({
    color: theme.palette.interviewInfo.hostNameColor,
    textDecoration: 'none',
    transition: 'color 0.2s',
    '&:hover': {
      color: theme.palette.primary[300],
    },
  }),
  hostSpecialization: (theme) => ({
    color: theme.palette.interviewInfo.roleColor,
    fontWeight: 400,
  }),
};
