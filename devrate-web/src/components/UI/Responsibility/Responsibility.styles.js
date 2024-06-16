export const styles = {
  responsibilityContainer: (theme) => ({
    display: 'inline-block',
    paddingY: theme.spacing(2),
    paddingX: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(3),
    borderRadius: 100,
    backgroundColor: theme.palette.primary[100],
  }),
  responsibilityContainerwithBTN: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    paddingY: theme.spacing(2),
    paddingX: theme.spacing(3),
    marginRight: theme.spacing(3),
    borderRadius: 100,
    backgroundColor: theme.palette.primary[100],
  }),
  responsibilityText: (theme) => ({
    color: theme.palette.primary[800],
  }),
  icon: (theme) => ({
    color: theme.palette.primary[600],
    padding: theme.spacing(0),
  })
};
