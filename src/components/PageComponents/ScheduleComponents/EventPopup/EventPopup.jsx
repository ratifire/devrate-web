import React from 'react'
 import {Box, IconButton, Typography} from "@mui/material";
import {styles} from "./EventPopup.styles"
import CloseIcon from "@mui/icons-material/Close";
import LinkIcon from "@mui/icons-material/Link";
import {ButtonDef} from "../../../FormsComponents/Buttons";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";
import {toast} from "react-toastify";
import {useDeleteEventByIdMutation} from "../../../../redux/schedule/scheduleApiSlice";

const EventPopup = ({handleClosePopup, event, popup, popupPosition}) => {
	const { t } = useTranslation();
	const [deleteEventById] = useDeleteEventByIdMutation();
	
	
	const handleCancelInterview = async function (event){
		try {
			await deleteEventById(event).unwrap();    // change to async function for correct work
			toast.success('Event was deleted', {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
		} catch (error) {
			console.error('Failed to add skill:', error);
			toast.error('Event was not deleted due to some problems', {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
		}
	}
	return (
		<Box
			sx={{...styles.popup,
				top: popup.y - 60,
				left: popup.x+30,}}
		>
			{popupPosition==="TOPLEFT"&&<Box sx={styles.popupTriangularTopLeft}></Box>}
			
			{popupPosition==="BOTTOMLEFT"&&<Box sx={styles.popupTriangularBottomLeft}></Box>}
			{popupPosition==="TOPRIGHT"&&<Box sx={styles.popupTriangularTopRight}></Box>}
			{popupPosition==="BOTTOMRIGHT"&&<Box sx={styles.popupTriangularBottomRight}></Box>}
			
			
			<Box sx={styles.infoContainer}>
				<IconButton onClick={handleClosePopup} sx={styles.closeIcon}
				>
					<CloseIcon/>
				</IconButton>
				<Box sx={styles.userInfo}>
					<Typography variant="caption2" sx={styles.title}>
						{t('schedule.popupUserInfo')}</Typography>
					<Typography variant="subtitle2" sx={styles.name}>{event.participantDtos[0].name} {event.participantDtos[0].surname}</Typography>
					<Typography variant="caption2" sx={styles.position}>{event.participantDtos[0].status}</Typography>
					<Typography variant="caption2" sx={styles.role}>{t('schedule.role')}{event.participantDtos[0].role}</Typography>
				</Box>
				<Box sx={styles.interviewerInfo}>
					<Typography variant="caption2" sx={styles.title}>{t('schedule.popupInterviewerInfo')}</Typography>
					<Typography variant="subtitle2" sx={styles.name}>{event.host.name} {event.host.surname}</Typography>
					<Typography variant="caption2" sx={styles.position}>{event.host.status}</Typography>
					<Typography variant="caption2" sx={styles.role}>{t('schedule.role')} {event.host.role}</Typography>
				</Box>
			</Box>
			<Box sx={styles.buttonsContainer}>
				<IconButton  component='a' href={event.link} target='_blank'sx={styles.icon}
				>
					<LinkIcon/>
				</IconButton>
				<ButtonDef
					correctStyle={styles.outlined}
					type={'button'}
					variant='outlined'
					handlerClick={handleCancelInterview}
					label={t('schedule.cancelEventBtn')}
				/>
			</Box>
		
		
		</Box>
	)
}
export default EventPopup


EventPopup.propTypes = {
	handleClosePopup: PropTypes.func.isRequired,
	event: PropTypes.object.isRequired,
	popup: PropTypes.object.isRequired,
	popupPosition: PropTypes.string
};
EventPopup.defaultProps = {
	handleClosePopup: () => {},
	event: {},
	popup: {},
	popupPosition:"TOPRIGHT"
};