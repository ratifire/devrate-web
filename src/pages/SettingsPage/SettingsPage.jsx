import { lazy, memo } from 'react';
import { Outlet } from 'react-router';
import { Box } from '@mui/material';
import { styles } from './SettingsPage.styles';

const SettingsSideBar = lazy(() =>
  import('@components/PageComponents/SettingsComponents').then((module) => ({ default: module.SettingsSideBar }))
);

const MemoizedSettingsSideBar = memo(SettingsSideBar);

const SettingsPage = () => {
  return (
    <Box sx={styles.wrapper}>
      <MemoizedSettingsSideBar />
      <Outlet />
    </Box>
  );
};

export default SettingsPage;
