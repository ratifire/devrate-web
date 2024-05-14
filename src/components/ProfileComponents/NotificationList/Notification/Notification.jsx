import React from 'react';
import {Box, Chip, IconButton, Typography} from "@mui/material";
import styles from "./Notification.styles";
import { ReactComponent as Warning } from '../../../../assets/icons/warning.svg';
import { ReactComponent as Info } from '../../../../assets/icons/info.svg';
import { ReactComponent as Message } from '../../../../assets/icons/message-dots.svg';
import { ReactComponent as Close } from '../../../../assets/icons/close.svg';
import PropTypes from "prop-types";


const iconMap = {
  message: <Message  />,
  info: <Info  />,
  warning: <Warning  />,
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
        <IconButton>
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