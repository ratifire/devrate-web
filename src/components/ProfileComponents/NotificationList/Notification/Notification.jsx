import React from 'react';
import {Box, Chip, IconButton, Typography} from "@mui/material";
import styles from "./Notification.styles";
import PropTypes from "prop-types";
import Sms from "@mui/icons-material/SmsOutlined";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import ErrorRounded from "@mui/icons-material/ErrorRounded";
import Close from "@mui/icons-material/Close";


const iconMap = {
  message: <Sms />,
  info: <InfoOutlined />,
  warning: <ErrorRounded />,
}

const Notification = (props) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.iconWrapper}>
        {iconMap[props.type]}
      </Box>

      <Box sx={styles.textWrapper}>
        <Typography variant="subtitle2">{props.title}</Typography>
        <Typography sx={styles.date} variant="subtitle3">{props.date}</Typography>
      </Box>

      <Box sx={styles.actionWrapper}>
        <IconButton sx={styles.closeBtn}>
          <Close />
        </IconButton>

        {props.new && <Chip label="Нове" sx={styles.badge} />}
      </Box>
    </Box>
  )
}

Notification.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  id: PropTypes.string.isRequired,
  new: PropTypes.bool,
  date: PropTypes.string.isRequired,

}

export default Notification;