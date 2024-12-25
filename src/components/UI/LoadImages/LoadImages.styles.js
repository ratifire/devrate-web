export const styles = {
  wrapper: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gridGap: theme.spacing(3),
  }),
  dropZoneWrapper: {
    width: '334px',
    height: '334px',
    cursor: 'pointer',
    '@media (max-height: 558px)': {
      width: '272px',
      height: '272px',
    },
  },
  dropZone: (theme) => ({
    position: 'relative',
    width: '334px',
    height: '334px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gridGap: theme.spacing(2),
    backgroundColor: 'transparent',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='334' height='334' viewBox='0 0 334 334' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='39' y1='0.5' x2='62' y2='0.5' stroke='%23444446'/%3E%3Cline x1='86' y1='0.5' x2='109' y2='0.5' stroke='%23444446'/%3E%3Cline x1='132' y1='0.5' x2='155' y2='0.5' stroke='%23444446'/%3E%3Cline x1='179' y1='0.5' x2='202' y2='0.5' stroke='%23444446'/%3E%3Cline x1='225' y1='0.5' x2='248' y2='0.5' stroke='%23444446'/%3E%3Cline x1='272' y1='0.5' x2='295' y2='0.5' stroke='%23444446'/%3E%3Cline x1='39' y1='333.5' x2='62' y2='333.5' stroke='%23444446'/%3E%3Cline x1='86' y1='333.5' x2='109' y2='333.5' stroke='%23444446'/%3E%3Cline x1='132' y1='333.5' x2='155' y2='333.5' stroke='%23444446'/%3E%3Cline x1='179' y1='333.5' x2='202' y2='333.5' stroke='%23444446'/%3E%3Cline x1='225' y1='333.5' x2='248' y2='333.5' stroke='%23444446'/%3E%3Cline x1='272' y1='333.5' x2='295' y2='333.5' stroke='%23444446'/%3E%3Cline x1='333.5' y1='295' x2='333.5' y2='272' stroke='%23444446'/%3E%3Cline x1='333.5' y1='248' x2='333.5' y2='225' stroke='%23444446'/%3E%3Cline x1='333.5' y1='202' x2='333.5' y2='179' stroke='%23444446'/%3E%3Cline x1='333.5' y1='155' x2='333.5' y2='132' stroke='%23444446'/%3E%3Cline x1='333.5' y1='109' x2='333.5' y2='86' stroke='%23444446'/%3E%3Cline x1='333.5' y1='62' x2='333.5' y2='39' stroke='%23444446'/%3E%3Cline x1='0.5' y1='295' x2='0.5' y2='272' stroke='%23444446'/%3E%3Cline x1='0.5' y1='248' x2='0.5' y2='225' stroke='%23444446'/%3E%3Cline x1='0.5' y1='202' x2='0.5' y2='179' stroke='%23444446'/%3E%3Cline x1='0.5' y1='155' x2='0.5' y2='132' stroke='%23444446'/%3E%3Cline x1='0.5' y1='109' x2='0.5' y2='86' stroke='%23444446'/%3E%3Cline x1='0.5' y1='62' x2='0.5' y2='39' stroke='%23444446'/%3E%3Cpath d='M0.5 15.5L0.5 4.5C0.5 2.29086 2.29086 0.5 4.5 0.5L15.5 0.5' stroke='%23444446'/%3E%3Cpath d='M333.5 15.5V4.5C333.5 2.29086 331.709 0.5 329.5 0.5L318.5 0.5' stroke='%23444446'/%3E%3Cpath d='M333.5 318.5V329.5C333.5 331.709 331.709 333.5 329.5 333.5H318.5' stroke='%23444446'/%3E%3Cpath d='M0.5 318.5L0.5 329.5C0.5 331.709 2.29086 333.5 4.5 333.5H15.5' stroke='%23444446'/%3E%3C/svg%3E")`,
    '@media (max-height: 558px)': {
      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg width='274' height='274' viewBox='0 0 274 274' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cline x1='32.8428' y1='1.40625' x2='51.5669' y2='1.40625' stroke='%23444446'/%3e%3cline x1='71.105' y1='1.40625' x2='89.8291' y2='1.40625' stroke='%23444446'/%3e%3cline x1='108.553' y1='1.40625' x2='127.277' y2='1.40625' stroke='%23444446'/%3e%3cline x1='146.816' y1='1.40625' x2='165.54' y2='1.40625' stroke='%23444446'/%3e%3cline x1='184.264' y1='1.40625' x2='202.988' y2='1.40625' stroke='%23444446'/%3e%3cline x1='222.526' y1='1.40625' x2='241.25' y2='1.40625' stroke='%23444446'/%3e%3cline x1='32.8428' y1='272.5' x2='51.5669' y2='272.5' stroke='%23444446'/%3e%3cline x1='71.105' y1='272.5' x2='89.8291' y2='272.5' stroke='%23444446'/%3e%3cline x1='108.553' y1='272.5' x2='127.277' y2='272.5' stroke='%23444446'/%3e%3cline x1='146.816' y1='272.5' x2='165.54' y2='272.5' stroke='%23444446'/%3e%3cline x1='184.264' y1='272.5' x2='202.988' y2='272.5' stroke='%23444446'/%3e%3cline x1='222.526' y1='272.5' x2='241.25' y2='272.5' stroke='%23444446'/%3e%3cline x1='272.5' y1='241.25' x2='272.5' y2='222.526' stroke='%23444446'/%3e%3cline x1='272.5' y1='202.988' x2='272.5' y2='184.264' stroke='%23444446'/%3e%3cline x1='272.5' y1='165.539' x2='272.5' y2='146.815' stroke='%23444446'/%3e%3cline x1='272.5' y1='127.277' x2='272.5' y2='108.553' stroke='%23444446'/%3e%3cline x1='272.5' y1='89.8281' x2='272.5' y2='71.104' stroke='%23444446'/%3e%3cline x1='272.5' y1='51.5664' x2='272.5' y2='32.8423' stroke='%23444446'/%3e%3cline x1='1.40723' y1='241.25' x2='1.40723' y2='222.526' stroke='%23444446'/%3e%3cline x1='1.40723' y1='202.988' x2='1.40723' y2='184.264' stroke='%23444446'/%3e%3cline x1='1.40723' y1='165.539' x2='1.40723' y2='146.815' stroke='%23444446'/%3e%3cline x1='1.40723' y1='127.277' x2='1.40723' y2='108.553' stroke='%23444446'/%3e%3cline x1='1.40723' y1='89.8281' x2='1.40723' y2='71.104' stroke='%23444446'/%3e%3cline x1='1.40723' y1='51.5664' x2='1.40723' y2='32.8423' stroke='%23444446'/%3e%3cpath d='M1.5 13.7109L1.5 5.49954C1.5 3.2904 3.29086 1.49954 5.5 1.49954H13.7114' stroke='%23444446'/%3e%3cpath d='M272.593 13.7109V5.49954C272.593 3.2904 270.802 1.49954 268.593 1.49954H260.381' stroke='%23444446'/%3e%3cpath d='M272.593 260.383V268.594C272.593 270.803 270.802 272.594 268.593 272.594H260.381' stroke='%23444446'/%3e%3cpath d='M1.5 260.383L1.5 268.594C1.5 270.803 3.29086 272.594 5.5 272.594H13.7114' stroke='%23444446'/%3e%3c/svg%3e ")`,
      width: '272px',
      height: '272px',
    },
  }),
  icon: (theme) => ({
    fontSize: 64,
    color: theme.palette.neutral[100],
  }),
  imgDef: (theme) => ({
    width: '334px',
    height: '334px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid',
    borderColor: theme.palette.neutral[500],
    borderRadius: 1,
    '@media (max-height: 558px)': {
      width: '272px',
      height: '272px',
    },
  }),
  imgDefIcon: (theme) => ({
    fontSize: 64,
    color: theme.palette.neutral[700],
  }),
  text: (theme) => ({
    color: theme.palette.text.primary,
    textAlign: 'center',
  }),
  link: (theme) => ({
    display: 'inline-block',
    marginLeft: '5px',
    color: theme.palette.primary[200],
  }),
  preview: {
    display: 'block',
    width: '334px',
    height: '334px',
    borderRadius: 4,
    '@media (max-height: 558px)': {
      width: '272px',
      height: '272px',
    },
  },
  wrapperBtn: (theme) => ({
    position: 'absolute',
    bottom: 0,
    left: 0,
    display: 'flex',
    gridGap: theme.spacing(3),
    width: 288,
  }),
  btn: {
    paddingY: '14px',
    maxWidth: '228px',
    width: '100%',
  },
  error: {
    textAlign: 'center',
    position: 'absolute',
    bottom: 60,
    left: 0,
    width: '100%',
  },
  btnIcon: (theme) => ({
    flex: '1 0 44px',
    color: theme.palette.neutral[200],
    borderRadius: 1,
    ':hover': {
      backgroundColor: theme.palette.neutral[800],
    },
    svg: {
      fontSize: '18px',
    },
  }),
  boxAvatarEditor: {
    position: 'relative',
  },
  customBorder: {
    position: 'absolute',
    zIndex: 1,
    width: '236px',
    height: '236px',
    top: '49px',
    left: '49px',
    pointerEvents: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='236' height='236' viewBox='0 0 334 334' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='39' y1='0.5' x2='62' y2='0.5' stroke='%23444446'/%3E%3Cline x1='86' y1='0.5' x2='109' y2='0.5' stroke='%23444446'/%3E%3Cline x1='132' y1='0.5' x2='155' y2='0.5' stroke='%23444446'/%3E%3Cline x1='179' y1='0.5' x2='202' y2='0.5' stroke='%23444446'/%3E%3Cline x1='225' y1='0.5' x2='248' y2='0.5' stroke='%23444446'/%3E%3Cline x1='272' y1='0.5' x2='295' y2='0.5' stroke='%23444446'/%3E%3Cline x1='39' y1='333.5' x2='62' y2='333.5' stroke='%23444446'/%3E%3Cline x1='86' y1='333.5' x2='109' y2='333.5' stroke='%23444446'/%3E%3Cline x1='132' y1='333.5' x2='155' y2='333.5' stroke='%23444446'/%3E%3Cline x1='179' y1='333.5' x2='202' y2='333.5' stroke='%23444446'/%3E%3Cline x1='225' y1='333.5' x2='248' y2='333.5' stroke='%23444446'/%3E%3Cline x1='272' y1='333.5' x2='295' y2='333.5' stroke='%23444446'/%3E%3Cline x1='333.5' y1='295' x2='333.5' y2='272' stroke='%23444446'/%3E%3Cline x1='333.5' y1='248' x2='333.5' y2='225' stroke='%23444446'/%3E%3Cline x1='333.5' y1='202' x2='333.5' y2='179' stroke='%23444446'/%3E%3Cline x1='333.5' y1='155' x2='333.5' y2='132' stroke='%23444446'/%3E%3Cline x1='333.5' y1='109' x2='333.5' y2='86' stroke='%23444446'/%3E%3Cline x1='333.5' y1='62' x2='333.5' y2='39' stroke='%23444446'/%3E%3Cline x1='0.5' y1='295' x2='0.5' y2='272' stroke='%23444446'/%3E%3Cline x1='0.5' y1='248' x2='0.5' y2='225' stroke='%23444446'/%3E%3Cline x1='0.5' y1='202' x2='0.5' y2='179' stroke='%23444446'/%3E%3Cline x1='0.5' y1='155' x2='0.5' y2='132' stroke='%23444446'/%3E%3Cline x1='0.5' y1='109' x2='0.5' y2='86' stroke='%23444446'/%3E%3Cline x1='0.5' y1='62' x2='0.5' y2='39' stroke='%23444446'/%3E%3Cpath d='M0.5 15.5L0.5 4.5C0.5 2.29086 2.29086 0.5 4.5 0.5L15.5 0.5' stroke='%23444446'/%3E%3Cpath d='M333.5 15.5V4.5C333.5 2.29086 331.709 0.5 329.5 0.5L318.5 0.5' stroke='%23444446'/%3E%3Cpath d='M333.5 318.5V329.5C333.5 331.709 331.709 333.5 329.5 333.5H318.5' stroke='%23444446'/%3E%3Cpath d='M0.5 318.5L0.5 329.5C0.5 331.709 2.29086 333.5 4.5 333.5H15.5' stroke='%23444446'/%3E%3C/svg%3E")`,
  },
};
