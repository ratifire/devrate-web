export const styles = {
  stepBorder: (theme) => ({
    paddingX: '6px',

    ' .MuiStepConnector-horizontal >span': {
      borderColor: theme.palette.steper.inactive.backgroundColor,
      borderTopWidth: '8px',
    },
    ' .Mui-active > span': {
      borderColor: theme.palette.steper.active.backgroundColor,
    },
    ' .Mui-completed>span': {
      borderColor: theme.palette.steper.completed.backgroundColor,
    },
  }),
  step: (theme) => ({
    padding: theme.spacing(0),
    cursor: 'default',
  }),
  label: () => ({
    '& .MuiStepLabel-iconContainer': {
      paddingRight: '0',
    },
    padding: '0',
    margin: '0',
    '& .MuiStepLabel-label': {
      padding: '0',
    },
  }),
}