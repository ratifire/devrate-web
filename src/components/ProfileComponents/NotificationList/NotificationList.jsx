import React, {useState} from 'react';
import {Badge, Box, IconButton, Popover} from "@mui/material";
import Notification from "../Notification";
import { ReactComponent as BellNotification } from '../../../assets/icons/bell.svg';
import PropTypes from "prop-types";
import styles from "./NotificationList.styles"; // import { ReactComponent as LoupeSearch } from '../../../assets/icons/loupe.svg';

const NotificationList = (props) => {
  const [bellButton, setBellButton] = useState(null);

  const bellButtonClickHandler = (event) => {
    event.preventDefault();

    setBellButton(event.currentTarget);
  }

  const notificationsListClose = () => {
    setBellButton(null);
  }

  const open = Boolean(bellButton);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <IconButton onClick={bellButtonClickHandler}>
        <Badge color='error' overlap='circular' badgeContent=' ' variant='dot' invisible={false}>
          <BellNotification />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={bellButton}
        onClose={notificationsListClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box sx={styles.wrapper}>
          {props.items.map(item => {
            return (
              <Notification key={`notification-${item.id}`}
                            type={item.type}
                            id={item.id}
                            date={item.date}
                            new={item.new}
                            title={item.title}
              />
            );
          })}
        </Box>
      </Popover>
    </>
  );
}

NotificationList.propTypes = {
  items: PropTypes.array.isRequired,
}

export default NotificationList;