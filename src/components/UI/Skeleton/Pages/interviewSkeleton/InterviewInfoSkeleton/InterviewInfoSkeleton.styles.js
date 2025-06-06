export const styles = {
  interviewInfoWrapper: (theme) => ({
    paddingY: theme.spacing(3),
    paddingX: theme.spacing(4),
  }),
  interviewInfoTitleWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
  },
  line: (theme) => ({
    marginY: theme.spacing(2),
  }),
  interviewSpecializationTitleWrapper: (theme) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  }),
  interviewRole: (theme) => ({
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
};
