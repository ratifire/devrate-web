import * as React from 'react';
import { IconButton, Typography, List, Box, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Drawer  } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SchoolIcon from '@mui/icons-material/School';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import SettingsIcon from '@mui/icons-material/Settings';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LogoutIcon from '@mui/icons-material/Logout';
import PropTypes from 'prop-types';
import styles from './UserMenu.styles';
import { Link as RouterLink } from "react-router-dom";
import links from '../../../utils/links/links';
import { ReactComponent as RightArrow } from '../../../assets/icons/east.svg';

const UserMenu = ({ isDrawerOpen, toggleDrawer }) => {

  const list = () => (
    <Box
      sx={styles.userMenuBox}
      role="presentation"
    >
      <Box sx={styles.upperMenu}>
        <Typography sx={styles.menuTitle} variant="h5" component="div">Аккаунт</Typography>
        <IconButton onClick={toggleDrawer}>
          <RightArrow/>
        </IconButton>
      </Box>
      <List>
        <RouterLink style={styles.menuLink} to={links.profile}>
          <ListItem disablePadding>
            <ListItemButton sx={styles.listItemButton}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={"Профіль"} />
            </ListItemButton>
          </ListItem>
        </RouterLink>

        <RouterLink style={styles.menuLink} to={links.schedule}>
          <ListItem disablePadding>
            <ListItemButton sx={styles.listItemButton}>
              <ListItemIcon>
                <CalendarTodayIcon />
              </ListItemIcon>
              <ListItemText primary={"Розклад"} />
            </ListItemButton>
          </ListItem>
        </RouterLink>

      </List>
      <Divider />
      <List>
        <RouterLink style={styles.menuLink} to={links.specializations}>
          <ListItem disablePadding>
            <ListItemButton sx={styles.listItemButton}>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary={"Спеціалізації"} />
            </ListItemButton>
          </ListItem>
        </RouterLink>

        <RouterLink style={styles.menuLink} to={links.interviews}>
          <ListItem disablePadding>
            <ListItemButton sx={styles.listItemButton}>
              <ListItemIcon>
                <VideoCameraFrontIcon />
              </ListItemIcon>
              <ListItemText primary={"Співбесіди"} />
            </ListItemButton>
          </ListItem>
        </RouterLink>

      </List>
      <Divider />
      <List>
        <RouterLink style={styles.menuLink} to={links.settings}>
          <ListItem disablePadding>
            <ListItemButton sx={styles.listItemButton}>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary={"Налаштування"} />
            </ListItemButton>
          </ListItem>
        </RouterLink>

        <RouterLink style={styles.menuLink} to={links.saved}>
          <ListItem disablePadding>
            <ListItemButton sx={styles.listItemButton}>
              <ListItemIcon>
                <BookmarkIcon />
              </ListItemIcon>
              <ListItemText primary={"Збережене"} />
            </ListItemButton>
          </ListItem>
        </RouterLink>
      </List>
      <Divider />
      <List>
        <RouterLink style={styles.menuLink} to={links.home}>
            <ListItem disablePadding>
              <ListItemButton sx={styles.listItemButton}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary={"Вийти"}  />
              </ListItemButton>
            </ListItem>
        </RouterLink>
      </List>

    </Box>
  );

  return (
    <>
          <Drawer
            anchor="right"
            open={isDrawerOpen}
          >
            {list()}
          </Drawer>
    </>
  );
}

UserMenu.propTypes = {
  isDrawerOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default UserMenu;