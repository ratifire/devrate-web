export const styles = {
  skillItem: (theme) => ({
    backgroundColor: theme.palette.primary[100],
    color: theme.palette.primary[800],
    paddingY: theme.spacing(2),
    margin: theme.spacing(1),
    '& .MuiChip-deleteIcon': {
      color: theme.palette.primary[800],
    },
  }),
};