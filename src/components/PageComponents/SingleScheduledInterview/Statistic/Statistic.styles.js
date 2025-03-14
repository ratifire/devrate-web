export const styles = {
  wrapper: (theme) => ({
    padding: theme.spacing(3, 4),
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  }),
  boxCharts: (theme) => ({
    padding: theme.spacing(3),
    borderRadius: '4px',
    backgroundColor: theme.palette.interviewSkills.skillsBox,
    display: 'flex',
    justifyContent: 'space-between',
  }),
  chart: {
    maxWidth: '180px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};
