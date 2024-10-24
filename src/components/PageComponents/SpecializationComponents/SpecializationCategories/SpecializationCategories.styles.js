const DECO_SIZE = 50;

export const styles = {
  wrapper: (theme) => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(4),
    gap: theme.spacing(4),
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
    paddingBottom: '15px', // for scroll size compensation

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
  }),
  make_main_btn: {
    minWidth: '216px',
    padding: '12px 16px',
    textTransform: 'none',
  },
  add_specialization_btn: (theme) => ({
    width: '134px',
    backgroundColor: theme.palette.specialization.addSpec.color,
    borderRadius: 4,
  }),

  figure: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    minWidth: '228px',
    borderRadius: 4,
    position: 'relative',
    cursor: 'pointer',

    '&.active': {
      '&::before': {
        borderColor: theme.palette.specialization.activeSpec.color,
      },
      '&::after': {
        borderColor: theme.palette.specialization.activeSpec.color,
      },
      '.figure__deco::after': {
        borderColor: theme.palette.specialization.activeSpec.color,
      },
    },

    '&::before': {
      content: '""',
      display: 'flex',
      position: 'absolute',
      border: `1px solid ${theme.palette.specialization.addSpec.border}`,
      borderTop: 'none',
      transition: 'border-color .2s easy-in-out',
      backgroundColor: theme.palette.specialization.addSpec.color,
      top: `calc(100% - ${DECO_SIZE + 1}px)`,
      left: 0,
      height: DECO_SIZE,
      width: `calc(100% - ${DECO_SIZE}px)`,
      borderRadius: '0 0 16px 16px',
      zIndex: 1,
    },
    '&::after': {
      content: '""',
      display: 'flex',
      position: 'absolute',
      border: `1px solid ${theme.palette.specialization.addSpec.border}`,
      borderBottom: 'none',
      transition: 'border-color .2s easy-in-out',
      backgroundColor: theme.palette.specialization.addSpec.color,
      top: 0,
      left: 0,
      height: `calc(100% - ${DECO_SIZE}px)`,
      width: '100%',
      borderRadius: '16px 16px 16px 0',
    },
  }),
  figure_deco: (theme) => ({
    position: 'absolute',
    height: 48,
    width: 52,
    bottom: '2px',
    right: 0,
    borderRadius: '0 0 16px 0',
    backgroundColor: theme.palette.specialization.addSpec.deco,

    '&::before': {
      content: '""',
      display: 'flex',
      position: 'absolute',
      top: '-1px',
      zIndex: 2,
      left: 0,
      height: '50%',
      width: '50%',
      backgroundColor: theme.palette.specialization.addSpec.color,
    },
    '&::after': {
      content: '""',
      display: 'flex',
      position: 'absolute',
      backgroundColor: theme.palette.specialization.addSpec.deco,
      left: '2px',
      top: '0',
      zIndex: 2,
      height: '50%',
      width: '50%',
      borderTopLeftRadius: '16px',
      transition: 'border-color .2s easy-in-out',
      borderTop: '1px solid ' + theme.palette.specialization.addSpec.border,
      borderLeft: '1px solid ' + theme.palette.specialization.addSpec.border,
    },
  }),
  specialization_title_star: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '228px',
  },
  specialization_title: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(1),
    marginBottom: '23px',
    zIndex: 1,
    overflow: 'hidden',
    maxWidth: '178px',
  }),

  specialization_name: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },

  star: (theme) => ({
    marginTop: '12px',
    marginRight: '16px',
    color: theme.palette.specialization.star.color,
    position: 'relative',
    zIndex: 1,
  }),

  hardAndSoftSkills: (theme) => ({
    gap: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingBottom: '6px',
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    zIndex: 1,
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
    padding: 0,
    height: '38px',
    width: '38px',
    marginTop: '7px',
    marginLeft: '11px',
    position: 'relative',
    zIndex: 3,
  },
  editSpecialization: (theme) => ({
    zIndex: 1,
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
