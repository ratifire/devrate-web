export const styles = {
  wrapper: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(3),
    gap: theme.spacing(4),
    '@media (max-width: 991px)': {
      flexDirection: 'column',
      gap: theme.spacing(3),
    },
  }),

  specialization_left_box: {
    display: 'flex',
    flexDirection: 'column',
  },

  specialization_right_box: (theme) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    gap: theme.spacing(4),
    overflowX: 'auto',
    overflowY: 'visible',
    paddingBottom: '15px',

    '&::-webkit-scrollbar': {
      height: 10,
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: theme.palette.scroll.scrollWrapp,
      borderRadius: 8,
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: 6,
      backgroundColor: theme.palette.scroll.scrollEl,
    },
  }),

  page_title: (theme) => ({
    marginBottom: theme.spacing(5),
    fontSize: 34,
    '@media (max-width: 991px)': {
      marginBottom: 0,
    },
  }),

  trackerWrapper: {
    '@media (max-width: 991px)': {
      display: 'none',
    },
    '@media (min-width: 992px)': {
      display: 'block',
    },
  },

  add_specialization_btn: (theme) => ({
    width: '134px',
    backgroundColor: theme.palette.specialization.addSpec.color,
    borderRadius: 4,
  }),

  figure: (url) => ({
    position: 'relative',
    minWidth: '228px',
    height: '138px',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundImage: url,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }),

  specialization_title: (theme) => ({
    position: 'absolute',
    top: theme.spacing(2),
    left: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    zIndex: 2,
    overflow: 'hidden',
    maxWidth: '150px',
  }),

  specialization_name: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    display: 'inline-block',
    maxWidth: '100%',
  },

  star: (theme) => ({
    position: 'absolute',
    top: '14px',
    right: '15px',
    color: theme.palette.specialization.star.color,
    zIndex: 2,
  }),

  hardAndSoftSkills: (theme) => ({
    position: 'absolute',
    bottom: '6px',
    left: theme.spacing(3),
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(3),
    zIndex: 2,
  }),

  softSkills: () => ({
    display: 'flex',
    flexDirection: 'column',
  }),

  hardSkills: {
    display: 'flex',
    flexDirection: 'column',
  },

  skillsStatistic: {
    textTransform: 'uppercase',
    lineHeight: '18px',
    letterSpacing: '0.16px',
    fontSize: '10px',
  },

  editSpecialization_btn: {
    position: 'absolute',
    bottom: '2px',
    right: '2px',
    padding: 0,
    height: '38px',
    width: '38px',
    zIndex: 3,
    backgroundColor: 'transparent',
    borderRadius: '50%',
  },

  editSpecialization: (theme) => ({
    border: `1px solid ${theme.palette.specialization.btnEditSpec.border}`,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '7px',
    boxSizing: 'content-box',
    color: theme.palette.specialization.btnEditSpec.color,
  }),
};
