export const styles = {
  responsibilityContainer: (theme) => ({
    display: 'inline-block',
    paddingY: theme.spacing(2),
    paddingX: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(3),
    borderRadius: 100,
    backgroundColor: theme.palette.responcibility.backgroundColor,
    border: '1px solid',
    borderColor: theme.palette.responcibility.responsibilityBorder,
  }),
  responsibilityContainerwithBTN: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    paddingY: theme.spacing(2),
    paddingX: theme.spacing(3),
    marginRight: theme.spacing(3),
    borderRadius: 100,
    backgroundColor: theme.palette.responcibility.backgroundColor,
  }),
  responsibilityText: (theme) => ({
    color: theme.palette.responcibility.responsibilityText,
  }),
  icon: (theme) => ({
    color: theme.palette.responcibility.responsibilityIcon,
    padding: theme.spacing(0),
  }),
};
