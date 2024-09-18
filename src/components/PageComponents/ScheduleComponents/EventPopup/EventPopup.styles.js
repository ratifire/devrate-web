export const styles = {popup: {
	width: "413px",
		height: "200px",
		padding: "18px",
		paddingTop:"36px",
		position: 'absolute',
		display:"flex",
		justifyContent: "space-between",
		flexDirection:"column",
		backgroundColor: "#252527",
		zIndex: 1000,
	
},
popupTriangular:(theme)=>({
	position: "absolute",
	bottom: "0px",
	left: "-19px",
	width: 0,
	height: 0,
	borderLeft: "9px solid transparent",
	borderRight: `14px solid ${theme.palette.neutral[800]}`,
	borderTop: "10px solid transparent",
	zIndex: 1001,
}),
	closeIcon:(theme)=>({
	position:"absolute",
	right:0,
	top:0,
	color: theme.palette.primary[100],
	
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
})}
