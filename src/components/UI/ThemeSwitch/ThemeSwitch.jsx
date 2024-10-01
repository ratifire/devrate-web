import React from 'react'
import {FormControlLabel, FormGroup, styled, Switch} from "@mui/material";
import {useDispatch} from "react-redux";
import {toggleTheme} from "../../../redux/theme/themeSlice";

const ThemeSwitch = () => {
	const dispatch = useDispatch()
	
	const MaterialUISwitch = styled(Switch)(({ theme }) => ({
		width: 53,
		height: 26,
		padding: '0 1px 0px 1px',
		margin:0,
		'& .MuiSwitch-switchBase': {
			padding: 0,
			transform: 'translateX(3px)',
			'&.Mui-checked': {
				color: '#fff',
				transform: 'translateX(28px)',
				'& .MuiSwitch-thumb:before': {
					backgroundImage: `url("data:image/svg+xml;utf8,<svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12.705 10.2083C11.2642 10.2083 8.8725 9.43249 7.64167 7.04082C6.2825 4.40999 7.35 2.09416 7.95083 1.16666C4.82417 1.27749 2.32167 3.83832 2.32167 6.99416C2.32167 7.07582 2.33333 7.15749 2.33333 7.23916C2.68917 7.08749 3.08 6.99416 3.48833 6.99416C3.48833 5.19166 4.4975 3.62832 5.99667 2.85249C5.705 4.12999 5.68167 5.79249 6.60333 7.57749C7.51917 9.35082 9.04167 10.465 10.57 10.9958C9.8525 11.4275 9.02417 11.6667 8.16083 11.6667C7.86917 11.6667 7.5775 11.6375 7.2975 11.585C7.08167 11.9933 6.74917 12.3258 6.34083 12.5417C6.9125 12.7283 7.525 12.8333 8.155 12.8333C10.1967 12.8333 11.9933 11.7833 13.0375 10.1967C12.9383 10.2025 12.8217 10.2083 12.705 10.2083Z' fill='white'/><path d='M5.25 9.32749H5.145C4.9 8.65082 4.25833 8.16082 3.5 8.16082C2.53167 8.16082 1.75 8.94249 1.75 9.91082C1.75 10.8792 2.53167 11.6608 3.5 11.6608H5.25C5.89167 11.6608 6.41667 11.1358 6.41667 10.4942C6.41667 9.85249 5.89167 9.32749 5.25 9.32749Z' fill='white'/></svg>")`,
				},
				'& + .MuiSwitch-track': {
					opacity: 1,
					backgroundColor: '#3E3E40',
					borderRadius: 26 / 2,
					border: `${theme.palette.themeSwitcher.borderColor} 1px solid`,
					...theme.applyStyles('dark', {
						backgroundColor: theme.palette.themeSwitcher.switcherColor,
						
					}),
				},
			},
		},
		'& .MuiSwitch-thumb': {
			backgroundColor: theme.palette.themeSwitcher.switcherColor,
			width: 22,
			height: 22,
			marginTop: "2px",
			'&::before': {
				content: "''",
				position: 'absolute',
				width: '100%',
				height: '100%',
				marginTop: "1px",
				left: 0,
				top: 0,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundImage: `url("data:image/svg+xml;utf8,<svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'><g clip-path='url(%23clip0_7573_31881)'><path d='M3.9435 3.08584L2.8935 2.04168L2.071 2.86418L3.11516 3.90834L3.9435 3.08584ZM0.583496 6.38751H2.3335V7.55418H0.583496V6.38751ZM6.41683 0.583344H7.5835V2.30418H6.41683V0.583344ZM11.1068 2.03876L11.9282 2.85951L10.884 3.90368L10.0632 3.08234L11.1068 2.03876ZM10.0568 10.8558L11.101 11.9058L11.9235 11.0833L10.8735 10.0392L10.0568 10.8558ZM11.6668 6.38751H13.4168V7.55418H11.6668V6.38751ZM7.00016 3.47084C5.06933 3.47084 3.50016 5.04001 3.50016 6.97084C3.50016 8.90168 5.06933 10.4708 7.00016 10.4708C8.931 10.4708 10.5002 8.90168 10.5002 6.97084C10.5002 5.04001 8.931 3.47084 7.00016 3.47084ZM7.00016 9.30418C5.711 9.30418 4.66683 8.26001 4.66683 6.97084C4.66683 5.68168 5.711 4.63751 7.00016 4.63751C8.28933 4.63751 9.3335 5.68168 9.3335 6.97084C9.3335 8.26001 8.28933 9.30418 7.00016 9.30418ZM6.41683 11.6375H7.5835V13.3583H6.41683V11.6375ZM2.071 11.0775L2.8935 11.9L3.93766 10.85L3.11516 10.0275L2.071 11.0775Z' fill='white'/></g><defs><clipPath id='clip0_7573_31881'><rect width='14' height='14' fill='white'/></clipPath></defs></svg>")`,
			},
			...theme.applyStyles('light', {
				backgroundColor: theme.palette.themeSwitcher.switcherColor,
			}),
		},
		'& .MuiSwitch-track': {
			opacity: 1,
			backgroundColor: theme.palette.themeSwitcher.backgroundColor,
			borderRadius: 26 / 2,
			border: `${theme.palette.themeSwitcher.borderColor} 1px solid`,
			...theme.applyStyles('dark', {
				backgroundColor: '#8796A5',
			}),
		},
	}));

	return (
		<FormGroup sx={{display:"flex", width:"52px"}}>
			<FormControlLabel
				control={<MaterialUISwitch defaultChecked onChange={()=> dispatch(toggleTheme())}/>}
			/>
		</FormGroup>
	)
}
export default ThemeSwitch
