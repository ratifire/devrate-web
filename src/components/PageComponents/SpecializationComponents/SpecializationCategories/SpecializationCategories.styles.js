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

  figure: () => ({
    position: 'relative',
    minWidth: '228px',
    height: '138px',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg width='228' height='138' viewBox='0 0 228 138' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M175 122C175 130.837 167.837 138 159 138H16C7.16344 138 0 130.837 0 122V16C0 7.16345 7.16344 0 16 0H212C220.837 0 228 7.16344 228 16V75C228 83.8366 220.837 91 212 91H191C182.163 91 175 98.1634 175 107V122Z' fill='%233E3E40'/%3e%3c/svg%3e ")`, // Серый фон с изгибами
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    '&.active::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg width='228' height='138' viewBox='0 0 228 138' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cmask id='path-1-inside-1_13464_36691' fill='white'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M175 122C175 130.837 167.837 138 159 138H16C7.16344 138 0 130.837 0 122V16C0 7.16344 7.16344 0 16 0H212C220.837 0 228 7.16344 228 16V75C228 83.8366 220.837 91 212 91H191C182.163 91 175 98.1634 175 107V122Z'/%3e%3c/mask%3e%3cpath d='M16 138V137H159V138V139H16V138ZM0 16H1V122H0H-1V16H0ZM212 0V1H16V0V-1H212V0ZM228 75H227V16H228H229V75H228ZM212 91V92H191V91V90H212V91ZM175 107H176V122H175H174V107H175ZM191 91V92C182.716 92 176 98.7157 176 107H175H174C174 97.6112 181.611 90 191 90V91ZM228 75H229C229 84.3888 221.389 92 212 92V91V90C220.284 90 227 83.2843 227 75H228ZM212 0V-1C221.389 -1 229 6.61116 229 16H228H227C227 7.71573 220.284 1 212 1V0ZM0 16H-1C-1 6.61116 6.61115 -1 16 -1V0V1C7.71572 1 1 7.71573 1 16H0ZM159 138V137C167.284 137 174 130.284 174 122H175H176C176 131.389 168.389 139 159 139V138ZM16 138V139C6.61116 139 -1 131.389 -1 122H0H1C1 130.284 7.71573 137 16 137V138Z' fill='%23B78AF7' mask='url(%23path-1-inside-1_13464_36691)'/%3e%3c/svg%3e")`, // Бордюр для активного состояния
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: 1,
    },
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
