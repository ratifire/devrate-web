import * as React from 'react';
import { IconButton, Typography, Box, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Drawer, Link,} from '@mui/material';
import PropTypes from 'prop-types';
import styles from './UserMenu.styles';
import { Link as RouterLink } from "react-router-dom";
import links from './profileRoutes';
import EastIcon from '@mui/icons-material/East';
import { useTranslation } from 'react-i18next';

const UserMenu = ({ isDrawerOpen, toggleDrawer }) => {
  const { t } = useTranslation();

  return (
    <>
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={toggleDrawer}
          >
            <Box
              sx={styles.userMenuBox}
              role="presentation"
            >
              <Box sx={styles.upperMenu}>
                <Typography variant="h5" component="div">Аккаунт</Typography>
                <IconButton sx={styles.menuLinkBtn} onClick={toggleDrawer}>
                  <EastIcon sx={styles.menuLink}/>
                </IconButton>
              </Box>

            {links.map((link, index) => (
              <React.Fragment key={link.path}>
              <Link key={link.path} to={link.path} component={RouterLink} sx={styles.menuLink} target={link.target}>
                <ListItem disablePadding>
                  <ListItemButton sx={styles.listItemButton}>
                    <ListItemIcon>
                        <link.icon sx={styles.iconItem} />
                    </ListItemIcon>
                    <ListItemText primary={t(link.name)}  />
                  </ListItemButton>
                </ListItem>
              </Link>
              {index % 2 !== 0 && <Divider key={index} sx={styles.divider} /> }
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