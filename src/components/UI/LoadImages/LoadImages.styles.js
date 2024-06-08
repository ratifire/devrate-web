export const styles = {
  wrapper: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gridGap: theme.spacing(3),
  }),
  dropZoneWrapper: {
    width: '334px',
    height: '334px',
  },
  dropZone: (theme) => ({
    width: 334,
    height: 334,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gridGap: theme.spacing(2),
    backgroundColor: 'transparent',
    border: '1px dashed',
    borderColor: theme.palette.neutral[500],
    borderRadius: 1,
    cursor: 'pointer',
  }),
  icon: (theme) => ({
    fontSize: 64,
    color: theme.palette.neutral[100],
  }),
  imgDef: (theme) => ({
    width: 334,
    height: 334,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid',
    borderColor: theme.palette.neutral[500],
    borderRadius: 1,
  }),
  imgDefIcon: (theme) => ({
    fontSize: 64,
    color: theme.palette.neutral[700],
  }),
  text: (theme) => ({
    color: theme.palette.text.primary,
    textAlign: 'center',
    '> span': {
      color: theme.palette.primary[200],
    },
  }),
  preview: {
    width: 334,
    height: 334,
    borderRadius: 4,
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
};
