export const styles = {
  wrapper: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gridGap: theme.spacing(3),
  }),
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
};
