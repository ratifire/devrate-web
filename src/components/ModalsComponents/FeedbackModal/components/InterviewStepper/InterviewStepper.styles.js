export const styles = {
  stepBorder: (theme) => ({
    paddingX: '6px',

    ' .MuiStepConnector-horizontal >span': {
      borderColor: theme.palette.background.level3,
      borderTopWidth: '8px',
    },
    ' .Mui-active > span': {
      borderColor: theme.palette.primary['400'],
    },
    ' .Mui-completed>span': {
      borderColor: theme.palette.primary['400'],
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