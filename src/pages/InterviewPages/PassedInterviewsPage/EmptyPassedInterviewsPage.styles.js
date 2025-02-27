export const styles = {
  container: (theme) => ({
    paddingY: theme.spacing(3),
    paddingX: theme.spacing(3),
    '@media (min-width: 600px)': {
      paddingY: theme.spacing(4),
      paddingX: theme.spacing(4),
    },
    '@media (min-width: 1272px)': {
      maxWidth: '1920px',
    },
  }),
  contentWrapper: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    gridGap: theme.spacing(4),
    minHeight: 'calc(100vh - 100px)',
  }),
  box: (theme) => ({
    height: '100%',
    flex: ' 0 0 354px',
    '@media (min-width: 1272px)': {
      flex: '0 0 354px',
    },
    '@media (min-width: 1920px)': {
      flex: '0 0 354px',
    },
    ' > div': {
      borderRadius: 2,
      backgroundColor: theme.palette.pagesSections.backgroundColor,
      backgroundImage: 'none',
      boxShadow: 'none',
      height: '100%',
    },
  }),
  wrapper: (theme) => ({
    width: '100%',
    padding: theme.spacing(4),
    paddingBottom: theme.spacing(0),
    height: '900px',
  }),
  interviewTitle: (theme) => ({
    marginBottom: theme.spacing(3),
    fontFamily: theme.typography.fontFamily,
    fontWeight: 500,
    lineHeight: '41.99px',
    letterSpacing: '0.25px',
  }),
  scrollContainer: (theme, heightParent) => ({
    paddingRight: '9px',
    marginRight: '-17px',
    maxHeight: `calc(${heightParent}px - 80px)`,
    height: '100%',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      paddingRight: theme.spacing(3),
      width: 10,
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: theme.palette.scroll.scrollWrapp.backgroundColor,
      borderRadius: 8,
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 6,
      backgroundColor: theme.palette.scroll.scrollEl.backgroundColor,
    },
  }),
  sideBarEventContainer: (theme) => ({
    gap: '10px',
    width: '100%',
    backgroundColor: theme.palette.schedule.sideBarEvent.backgroundColor,
    backgroundImage: 'none',
    boxShadow: 'none',
    borderRadius: 1,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    border: '1px solid transparent',
    height: '150px',
  }),
  title: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.secondary,
  }),

  mainContent: (theme) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridTemplateRows: 'repeat(12, 25px)',
    width: '100%',
    gridGap: theme.spacing(4),
    ' > div': {
      borderRadius: theme.spacing(2),
      boxShadow: 'none',
      backgroundImage: 'none',
    },
  }),
  userInfo: (theme) => ({
    gridColumn: '1/6',
    gridRow: '1/5',
    ' > div': {
      maxWidth: '100%',
      boxShadow: 'none',
      backgroundImage: 'none',
      borderRadius: theme.spacing(2),
      backgroundColor: theme.palette.pagesSections.backgroundColor,
    },
  }),
  interviewersAssessment: (theme) => ({
    marginTop: '2px',
    gridColumn: '1/6',
    gridRow: '5/26',
    maxHeight: '1000px',
    padding: theme.spacing(4),
    backgroundColor: theme.palette.pagesSections.backgroundColor,
    ' > div div': {
      borderRadius: theme.spacing(1),
      maxWidth: '100%',
      backgroundColor: theme.palette.interviewPage.innerBackground,
    },
  }),

  interviewersAssessmentTitle: (theme) => ({
    marginBottom: theme.spacing(3),
  }),

  hardSkills: (theme) => ({
    width: '100%',
    marginBottom: theme.spacing(3),
    borderRadius: theme.spacing(1),
    boxShadow: 'none',
    backgroundImage: 'none',
    padding: theme.spacing(4),
    ' > div div ': {
      borderRadius: theme.spacing(1),
    },
    '> div': {
      ...(theme.palette.mode === 'light' && {
        borderColor: theme.palette.interviewPage.innerBorderColor,
        borderWidth: '1px',
        borderStyle: 'solid',
      }),
    },
  }),
  sortSkills: (theme) => ({
    width: '100%',
    boxShadow: 'none',
    backgroundImage: 'none',
    ' > div': {
      borderRadius: theme.spacing(1),
    },
    '> div': {
      ...(theme.palette.mode === 'light' && {
        borderColor: theme.palette.interviewPage.innerBorderColor,
        borderWidth: '1px',
        borderStyle: 'solid',
      }),
    },
  }),
  interviewInfo: (theme) => ({
    gridColumn: '6/13',
    gridRow: '1/6',
    backgroundColor: theme.palette.pagesSections.backgroundColor,
  }),
  statistics: (theme) => ({
    marginTop: '-6px',
    gridColumn: '6/13',
    gridRow: '6/11',
    maxHeight: '225px',
    ' > div': {
      height: '225px',
      borderRadius: theme.spacing(2),
      backgroundColor: theme.palette.pagesSections.backgroundColor,
      boxShadow: 'none',
      backgroundImage: 'none',
    },
  }),
  interviewFeedback: (theme) => ({
    marginTop: '-8px',
    gridColumn: '6/13',
    gridRow: '11/12',
    minHeight: '216px',
    '> div': {
      minHeight: '216px',
      borderRadius: theme.spacing(2),
      backgroundColor: theme.palette.pagesSections.backgroundColor,
      '> div': {
        ...(theme.palette.mode === 'light' && {
          borderColor: theme.palette.interviewPage.innerBorderColor,
          borderWidth: '1px',
          borderStyle: 'solid',
        }),
      },
    },
  }),
  userCardWrapper: (theme) => ({
    padding: theme.spacing(4),
    borderRadius: 2,
    backgroundColor: theme.palette.pagesSections.backgroundColor,
    boxShadow: 'none',
    backgroundImage: 'none',
    maxWidth: '480px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  }),
  userCardBox: {
    display: 'flex',
    gap: '16px',
  },
  userCardBoxInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    height: '130px',
  },
  userSkillsWrapper: () => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    minHeight: '100%',
  }),
  userSkillsInfo: {
    backgroundColor: 'yellow',
    display: 'flex',
    flexDirection: 'column',
    height: '180px',
  },
  interviewInfoWrapper: (theme) => ({
    paddingY: theme.spacing(3),
    paddingX: theme.spacing(4),
    height: '40px',
  }),
  interviewInfoTitleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  statisticsWrapper: (theme) => ({
    paddingY: theme.spacing(3),
    paddingX: theme.spacing(4),
    width: '100%',
    ' > div': {
      borderRadius: 2,
      backgroundColor: theme.palette.statistics.innerBackground,
      boxShadow: 'none',
      backgroundImage: 'none',
    },
  }),

  statisticsTitle: (theme) => ({
    marginBottom: theme.spacing(3),
    width: '100%',
    height: '24px',
  }),

  interviewFeedbackWrapper: (theme) => ({
    paddingY: theme.spacing(3),
    paddingX: theme.spacing(4),
  }),

  interviewFeedbackTitle: (theme) => ({
    marginBottom: theme.spacing(3),
  }),

  interviewFeedbackText: (theme) => ({
    minHeight: '176px',
    width: '100%',
    paddingY: theme.spacing(3),
    paddingX: theme.spacing(4),
    borderRadius: 2,
    backgroundColor: '#3E3E40',
    boxShadow: 'none',
    backgroundImage: 'none',
  }),
};
