import { lazy, memo, Suspense } from 'react';
import { Outlet } from 'react-router';
import { Box } from '@mui/material';
import { styles } from './SettingsPage.styles';

const SettingsSideBar = lazy(() =>
  import('@components/PageComponents/SettingsComponents/index.js').then((module) => ({
    default: module.SettingsSideBar,
  }))
);

const MemoizedSettingsSideBar = memo(SettingsSideBar);

const SettingsPage = () => {
  return (
    <Box sx={styles.wrapper}>
      <Suspense fallback={<div>Loading...</div>}>
        <MemoizedSettingsSideBar />
      </Suspense>
      <Outlet />
    </Box>
  );
};

export default SettingsPage;
