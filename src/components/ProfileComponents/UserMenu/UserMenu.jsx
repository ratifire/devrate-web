import * as React from 'react';
import {
  IconButton,
  Typography,
  // List,
  Box,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  Link,
} from '@mui/material';

import PropTypes from 'prop-types';
import styles from './UserMenu.styles';
import { Link as RouterLink } from "react-router-dom";
import links from './profileRoutes';
import { ReactComponent as RightArrow } from "../../../assets/icons/east.svg";
// import { useTranslation } from 'react-i18next';

const UserMenu = ({ isDrawerOpen, toggleDrawer }) => {
  // const { t } = useTranslation();


  // const list = () => (
  //   <Box
  //     sx={styles.userMenuBox}
  //     role="presentation"
  //   >
  //     <Box sx={styles.upperMenu}>
  //       <Typography sx={styles.menuTitle} variant="h5" component="div">Аккаунт</Typography>
  //       <IconButton onClick={toggleDrawer}>
  //         <RightArrow/>
  //       </IconButton>
  //     </Box>
  //     <List>
  //       <RouterLink style={styles.menuLink} to={links.profile}>
  //         <ListItem disablePadding>
  //           <ListItemButton sx={styles.listItemButton}>
  //             <ListItemIcon>
  //               <PersonIcon />
  //             </ListItemIcon>
  //             <ListItemText primary={"Профіль"} />
  //           </ListItemButton>
  //         </ListItem>
  //       </RouterLink>
  //
  //       <RouterLink style={styles.menuLink} to={links.schedule}>
  //         <ListItem disablePadding>
  //           <ListItemButton sx={styles.listItemButton}>
  //             <ListItemIcon>
  //               <CalendarTodayIcon />
  //             </ListItemIcon>
  //             <ListItemText primary={"Розклад"} />
  //           </ListItemButton>
  //         </ListItem>
  //       </RouterLink>
  //
  //     </List>
  //     <Divider />
  //     <List>
  //       <RouterLink style={styles.menuLink} to={links.specializations}>
  //         <ListItem disablePadding>
  //           <ListItemButton sx={styles.listItemButton}>
  //             <ListItemIcon>
  //               <SchoolIcon />
  //             </ListItemIcon>
  //             <ListItemText primary={"Спеціалізації"} />
  //           </ListItemButton>
  //         </ListItem>
  //       </RouterLink>
  //
  //       <RouterLink style={styles.menuLink} to={links.interviews}>
  //         <ListItem disablePadding>
  //           <ListItemButton sx={styles.listItemButton}>
  //             <ListItemIcon>
  //               <VideoCameraFrontIcon />
  //             </ListItemIcon>
  //             <ListItemText primary={"Співбесіди"} />
  //           </ListItemButton>
  //         </ListItem>
  //       </RouterLink>
  //
  //     </List>
  //     <Divider />
  //     <List>
  //       <RouterLink style={styles.menuLink} to={links.settings}>
  //         <ListItem disablePadding>
  //           <ListItemButton sx={styles.listItemButton}>
  //             <ListItemIcon>
  //               <SettingsIcon />
  //             </ListItemIcon>
  //             <ListItemText primary={"Налаштування"} />
  //           </ListItemButton>
  //         </ListItem>
  //       </RouterLink>
  //
  //       <RouterLink style={styles.menuLink} to={links.saved}>
  //         <ListItem disablePadding>
  //           <ListItemButton sx={styles.listItemButton}>
  //             <ListItemIcon>
  //               <BookmarkIcon />
  //             </ListItemIcon>
  //             <ListItemText primary={"Збережене"} />
  //           </ListItemButton>
  //         </ListItem>
  //       </RouterLink>
  //     </List>
  //     <Divider />
  //     <List>
  //       <RouterLink style={styles.menuLink} to={links.home}>
  //           <ListItem disablePadding>
  //             <ListItemButton sx={styles.listItemButton}>
  //               <ListItemIcon>
  //                 <LogoutIcon />
  //               </ListItemIcon>
  //               <ListItemText primary={"Вийти"}  />
  //             </ListItemButton>
  //           </ListItem>
  //       </RouterLink>
  //     </List>
  //
  //   </Box>
  // );

  return (
    <>
          <Drawer
            anchor="right"
            open={isDrawerOpen}
          >
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

            {links.map((link, index) => (
              <React.Fragment key={link.path}>
              <Link key={link.path} to={link.path} component={RouterLink} sx={styles.menuLink} target={link.target}>
                {/*{t(name)}*/}
                <ListItem disablePadding>
                  <ListItemButton sx={styles.listItemButton}>
                    <ListItemIcon>
                        <link.icon/>
                    </ListItemIcon>
                    <ListItemText primary={link.name}  />
                  </ListItemButton>
                </ListItem>
              </Link>
              {index % 2 !== 0 && <Divider key={index} sx={{borderColor: "white"}} /> }
              </React.Fragment>
            ))}
            </Box>
          </Drawer>
    </>
  );
}

UserMenu.propTypes = {
  isDrawerOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default UserMenu;