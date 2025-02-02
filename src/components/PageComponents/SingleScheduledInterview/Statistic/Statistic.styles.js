export const styles = {
  wrapper: (theme) => ({
    backgroundColor: theme.palette.pagesSections.backgroundColor,
    backgroundImage: 'none',
    boxShadow: 'none',
    padding: theme.spacing(3, 4),
    maxWidth: '606px',
    width: '100%',
    borderRadius: 2,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  }),
  boxCharts: (theme) => ({
    padding: '16px',
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
