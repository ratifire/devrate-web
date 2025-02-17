export const styles = {
  wrapper: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: theme.spacing(3, 4),
  }),
  boxCharts: (theme) => ({
    padding: theme.spacing(3),
    borderRadius: '4px',
    backgroundColor: theme.palette.interviewSkills.skillsBox,
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  }),
  chart: {
    display: 'flex',
    flexDirection: 'column',
    gap: '19px',
    width: '30%',
  },
};
