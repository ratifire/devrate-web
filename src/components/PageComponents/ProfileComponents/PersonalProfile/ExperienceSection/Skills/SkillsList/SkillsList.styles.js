export const styles = {
  wrapper: (theme) => ({
    paddingX: theme.spacing(4),
    paddingY: theme.spacing(3),
    backgroundColor: theme.palette.sliderAssessment.backgroundColor,
    border: theme.palette.sliderAssessment.border,
    borderRadius: 2,
    width: '100%',
  }),
  accordion: {
    position: 'relative',
    cursor: 'pointer',
    padding: '10px 0',
    '@media (min-width: 1272px)': {
      cursor: 'auto',
    },
  },
  iconBtn: {
    position: 'absolute',
    top: 'calc(50% - 12px)',
    right: 0,
    borderRadius: 1,
    transition: 'transform 0.2s ease-in-out',
    '@media (min-width: 1272px)': {
      display: 'none',
    },
  },
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
  flex100: {
    flex: '0 1 100%',
  },
  flex50: {
    flex: '0 1 calc(50% - 10px)',
  },
};
