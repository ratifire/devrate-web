// const styles = {
//   workExpeirenceItemContainer: (theme) => ({
//     width: '100%',
//     marginBottom: theme.spacing(4),
//     padding: theme.spacing(4),
//     backgroundColor: '#3E3E40', //check with designers
//     borderRadius: 2,
//   }),
//   itemHeaderContainer: (theme) => ({
//     width: '100%',
//     marginBottom: theme.spacing(3),
//     display: 'flex',
//     justifyContent: 'space-between',
//   }),
//   workTitleContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   workPosition: (theme) => ({
//     marginBottom: theme.spacing(1),
//     color: theme.palette.text.primary,
//   }),
//   workPlaceTitle: (theme) => ({
//     color: theme.palette.text.secondary,
//   }),
//   workDutiesContainer: (theme) => ({
//     display: 'flex',
//     flexDirection: 'column',
//     marginTop: theme.spacing(3),
//   }),
//   workDutiesTitle: (theme) => ({
//     marginBottom: theme.spacing(3),
//     color: theme.palette.text.primary,
//   }),
//   workDuties: {},
// };
// export default styles;
const styles = {
  workExpeirenceItemContainer: (theme) => ({
    width: '100%',
    marginBottom: theme.spacing(4),
    padding: theme.spacing(4),
    backgroundColor: '#3E3E40',
    borderRadius: 2,
  }),
  itemHeaderContainer: (theme) => ({
    width: '100%',
    marginBottom: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
  workPosition: (theme) => ({
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(1),

  }),
  workDate: (theme) => ({
    color: theme.palette.text.secondary,
    textAlign: 'right',
  }),
  workPlaceTitleWrapper: (theme) => ({
    marginBottom: theme.spacing(3),
  }),
  workPlaceTitle: (theme) => ({
    color: theme.palette.text.secondary,
  }),
  workDutiesContainer: (theme) => ({
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(3),
  }),
  workDutiesTitle: (theme) => ({
    marginBottom: theme.spacing(3),
    color: theme.palette.text.primary,
  }),
  workDuties: (theme) => ({
    color: theme.palette.success.main,
  }),
};

export default styles;