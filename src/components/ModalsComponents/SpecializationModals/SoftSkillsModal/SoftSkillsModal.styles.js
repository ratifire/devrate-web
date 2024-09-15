export const styles = {
    title: (theme) => ({
      marginBottom: theme.spacing(4),
    }),
    input: (theme) => ({
      flex: `0 1 100%`,
      display: 'flex',
      alignItems: 'flex-start',
      gridGap: theme.spacing(3),
      minHeight: '40px',
    }),
    iconBtn: (theme) => ({
      marginTop: theme.spacing(1),
      padding: '12px',
      borderRadius: 1,
      color: theme.palette.primary[200],
    }),
    btn: (theme) => ({
      paddingY: '14px',
      maxWidth: '228px',
      marginTop: theme.spacing(4),
      alignSelf: 'flex-end',
    }),
    form: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    },
  };