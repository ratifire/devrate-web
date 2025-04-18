export const styles = {
  emptyHardSkills: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '16px',
    '@media(max-width: 991px)': {
      flexDirection: 'column-reverse',
    },
  },
  emptySoftSkills: {
    height: '150px',
    padding: '15px',
    display: 'flex',
    gap: '16px',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mascotHardsBox: {
    width: '180px',
    height: '120px',
  },
  mascotSoftsBox: {
    width: '120px',
    height: '80px',
  },
  emptyHardsText: {
    maxWidth: '20.125rem',
  },
};
