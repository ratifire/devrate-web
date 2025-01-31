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
  // interviewInfoTitle: () => ({
  //   // color: theme.palette.c
  // }),
  yearsAgo: {
    color: '#EFE6FD',
  },
  date: {
    display: 'block',
    width: '100%',
    color: '#EFE6FD',
    paddingBottom: '7px',
    borderBottom: 'solid 1px #69696B',
    marginBottom: '8px',
  },
  interviewSpecializationTitleWrapper: (theme) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  }),
  interviewSpecialization: {},
  level: () => ({
    color: '#25CBFF',
  }),
  role: (theme) => ({
    color: '#ECECED',
    marginBottom: theme.spacing(1),
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
  hostName: {
    color: '#CEB0FA',
  },
  hostSpecialization: {},
};
