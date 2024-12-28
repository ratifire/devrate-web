export const styles = {
  wrapper: (theme) => ({
    paddingX: theme.spacing(4),
    paddingY: theme.spacing(3),
    backgroundColor: theme.palette.sliderAssessment.backgroundColor,
    border: theme.palette.sliderAssessment.border,
    borderRadius: 2,
    width: '100%',
  }),
  star: (theme) => ({
    width: '18px',
    height: '18px',
    color: theme.palette.experienceSkillSect.star,
  }),
  titleWrapper: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    gridGap: theme.spacing(1),
    width: '100%',
  }),
  title: (theme) => ({
    color: theme.palette.text.main,
    flex: '1 2 max(199px)',
    maxWidth: '199px',
    textWrap: 'nowrap',
    width: '2vw',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  }),
  text: (theme) => ({
    textTransform: 'lowercase',
    '&.Junior': {
      color: theme.palette.experienceSkillSect.text.junior,
    },
    '&.Middle': {
      color: theme.palette.experienceSkillSect.text.middle,
    },
    '&.Senior': {
      color: theme.palette.experienceSkillSect.text.senior,
    },
    '&:first-letter': {
      textTransform: 'uppercase',
    },
    ' span': {
      display: 'inline-block',
      '&:first-letter': {
        textTransform: 'uppercase',
      },
    },
  }),
  list: {
    marginTop: '16px',
    display: 'flex',
    flexWrap: 'wrap',
    gridGap: '0 20px',
  },
};
