const DECO_SIZE = 45;

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
      width: 10,
    },
    '&::-webkit-scrollbar-track': (theme) => ({
      backgroundColor: theme.palette.neutral['600'],
      borderRadius: 8,
    }),
    '&::-webkit-scrollbar-thumb': (theme) => ({
      borderRadius: 6,
      backgroundColor: theme.palette.common.white,
    })
  }),
  page_title: (theme) => ({
    marginBottom: theme.spacing(5),
    fontSize: 34,
  }),
  make_main_btn: (theme) => ({
    color: theme.palette.action.active,
    border: `1px solid ${theme.palette.action.active}`,
    minWidth: '216px',
    padding: '12px 16px',
    textTransform: 'none',
    '&:hover': {
      color: theme.palette.primary[500],
    },
  }),
  add_specialization_btn: (theme) => ({
    width: '134px',
    backgroundColor: theme.palette.neutral[600],
    borderRadius: theme.spacing(2),
  }),

  figure: (theme) => ({
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '228px',
    borderRadius: '10px',
    position: 'relative',
    cursor: 'pointer',

    '&.active': {
      '&::before': {
        borderColor: theme.palette.primary[200],
      },
      '&::after': {
        borderColor: theme.palette.primary[200],
      },
      '.figure__deco::after': {
        borderColor: theme.palette.primary[200],
      }
    },

    '&::before': {
      content: '""',
      display: 'flex',
      position: 'absolute',
      borderRight: '1px solid ' + theme.palette.neutral[600],
      borderBottom: '1px solid ' + theme.palette.neutral[600],
      borderLeft: '1px solid ' + theme.palette.neutral[600],
      transition: 'border-color .2s easy-in-out',
      backgroundColor: theme.palette.neutral[600],
      top: `calc(100% - ${DECO_SIZE + 1}px)`,
      left: 0,
      height: DECO_SIZE,
      width: `calc(100% - ${DECO_SIZE}px)`,
      borderRadius: '0 0 10px 10px',
      zIndex: 1,
    },
    '&::after': {
      content: '""',
      display: 'flex',
      position: 'absolute',
      border: '1px solid ' + theme.palette.neutral[600],
      transition: 'border-color .2s easy-in-out',
      backgroundColor: theme.palette.neutral[600],
      top: 0,
      left: 0,
      height: `calc(100% - ${DECO_SIZE}px)`,
      width: '100%',
      borderRadius: '10px 10px 10px 0',
    },
  }),
  figure_deco: (theme) => ({
    position: 'absolute',
    height: 43,
    width: 47,
    bottom: '2px',
    right: 0,
    borderRadius: '0 0 10px 0',
    backgroundColor: theme.palette.background.level2,

    '&::before': {
      content: '""',
      display: 'flex',
      position: 'absolute',
      top: '-1px',
      zIndex: 2,
      left: 0,
      height: '50%',
      width: '50%',
      backgroundColor: theme.palette.neutral[600],
    },
    '&::after': {
      content: '""',
      display: 'flex',
      position: 'absolute',
      backgroundColor: theme.palette.background.level2,
      left: '1px',
      top: '-1px',
      zIndex: 2,
      height: '50%',
      width: '50%',
      borderTopLeftRadius: '10px',
      transition: 'border-color .2s easy-in-out',
      borderTop: '1px solid ' + theme.palette.neutral[600],
      borderLeft: '1px solid ' + theme.palette.neutral[600],
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
    marginBottom: theme.spacing(3),
    zIndex: 1,
    overflow: 'hidden',
    maxWidth: '178px',
  }),

  specialization_name: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },

  star: (theme) => ({
    marginTop: '12px',
    marginRight: '16px',
    color: theme.palette.action.active,
    position: 'relative',
    zIndex: 1,
  }),

  deleteBtn: (theme) => ({
    zIndex: 1,
    color: theme.palette.action.active,
    position: 'absolute',
    top: 5,
    right: 5,
    borderRadius: theme.spacing(2),
  }),

  hardAndSoftSkills: (theme) => ({
    gap: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingBottom: theme.spacing(3),
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
    lineHeight: '18px',
    letterSpacing: '0.16px',
    fontSize: '11px'
  },
  editSpecialization_btn: {
    padding: 0,
    height: '38px',
    width: '38px',
    marginTop: '4px',
    marginLeft: '6px',
    position: 'relative',
    zIndex: 3,
  },
  editSpecialization: (theme) => ({
    zIndex: 1,
    border: '1px solid #444446',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '7px',
    boxSizing: 'content-box',
    color: theme.palette.text.secondary,
  }),
}