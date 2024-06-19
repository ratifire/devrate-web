export const styles = {
    wrapper: (theme) => ({
      paddingBottom: theme.spacing(3),
    }),
    title: (theme) => ({
      marginBottom: theme.spacing(4),
    }),
    input100: (theme) => ({
      flex: `0 1 100%`,
      display: 'flex',
      alignItems: 'flex-start',
      gridGap: theme.spacing(3),
    }),
    iconBtn: (theme) => ({
      marginTop: theme.spacing(4),
      padding: '12px',
      borderRadius: 1,
      color: theme.palette.primary[200],
    }),
    list: (theme) => ({
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gridGap: theme.spacing(3),
    }),
    btn: (theme) => ({
      
        paddingY: '14px',
        maxWidth: '228px',
        marginTop: theme.spacing(4),     
        alignSelf: 'flex-end',
    }),
    wrapperLanguages: (theme) => ({
      display: 'flex',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gridGap: theme.spacing(3),
    }),
    skillItem: (theme) => ({
      backgroundColor: theme.palette.primary['100'],
      color: theme.palette.primary['800'],
      paddingY: theme.spacing(2),
      margin: theme.spacing(1),
      '& .MuiChip-deleteIcon': {
        color: theme.palette.primary['800'],
      },
    }),
    modalContent: (theme) => ({
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '25px',
      width: '732px',
      height: 'auto',
      overflowY: 'none',
      bgcolor: theme.palette.background.default,
      boxShadow: 24,
      p: 4,
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
    }),
    form: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    },
  };