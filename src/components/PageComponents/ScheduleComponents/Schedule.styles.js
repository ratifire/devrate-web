export const styles = {
  demoApp: {
    display: 'flex',
    minHeight: '100%',
    fontSize: '14px',
  },
  demoAppMain: (theme) => ({
    flexGrow: '1',

    padding: theme.spacing(4),
  }),
  fc: {
    margin: '0 auto',
  },
  // timeGridSlot: {
  //   height: '80.92px', // Adjust this value to change the width of the time-axis slots
  //   borderColor: '#303032',
  //   backgroundColor: 'red',
  // },
  timeGridTableData: (theme) => ({
    height: '80.92px', // Adjust this value to change the width of the time-axis slots
    borderColor: theme.palette.neutral[700],
  }),
  timeGridTableHead: (theme) => ({
    borderColor: theme.palette.neutral[700],
    color: theme.palette.sliderAssessment.lightGray,
    fontSize: '14px',
    lineHeight: '20.02px',
  }),
  timeGridTodayElements: (theme) => ({
    backgroundColor: theme.palette.sliderAssessment.darkGray,
  }),
  timeGridEventElements: (theme) => ({
    backgroundColor: theme.palette.info.main,
    border: 'none',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '21.98px',
    color: theme.palette.neutral[700],
  }),
  eventTooltip: {
    position: 'absolute',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    padding: '5px',
    borderRadius: '3px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
    pointerEvents: 'none',
  },
  popup: (theme) => ({
    width: "413px",
    height: "181px",
    padding: "18px",
    position: 'absolute',
    display:"flex",
    justifyContent: "space-between",
    flexDirection:"column",
    backgroundColor: theme.palette.neutral[800],
    zIndex: 1000,
  
  }),
  popupTriangular:(theme)=>({
    position: "absolute",
    bottom: "0px", // Трикутник під popup
    left: "-19px", // Відстань від лівого краю
    width: 0,
    height: 0,
    borderLeft: "9px solid transparent",
    borderRight: `14px solid ${theme.palette.neutral[800]}`,
    borderTop: "10px solid transparent", // Задайте колір трикутника
    zIndex: 1001, // Вище фону popup
  }),
  infoContainer:(theme)=>({
    display:"flex",
    marginBottom: theme.spacing(2)
  }),
  userInfo:theme=>({
    width:"45%",
    display:"flex",
    flexDirection:"column",
    paddingRight:theme.spacing(4),
    borderRight: `1px dashed ${theme.palette.neutral[200]}`
  }),
  interviewerInfo:(theme)=>({
    width:"55%",
    display:"flex",
    flexDirection:"column",
    paddingLeft:theme.spacing(4)
  }),
  
  title:(theme)=>({
    color: theme.palette.neutral[200],
    margin: 0,
    marginBottom:theme.spacing(2)
}),
  name:(theme)=>({
    color: theme.palette.text.primary,
    margin: theme.spacing(0),
    marginBottom: theme.spacing(2)
  }),
  position:(theme)=>({
    margin: 0,
    marginBottom: theme.spacing(2),
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
   }),
  role:{
    margin:0
  },
  
  buttonsContainer:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    width:"100%",
    height:"100%"
  },
  icon:(theme)=>({
    width:"24px",
    height: "24px",
    display:"block",
    color: theme.palette.primary[100],
    padding:0,
   }),
  outlined:(theme)=>({
    display:"block",
      height:"100%",
    border:"none",
    color: theme.palette.primary[100],
    fontSize:"14px",
    textTransform:"none",
    padding:0,
    width:"150px"
  })
};
