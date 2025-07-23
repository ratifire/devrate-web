import { lazy, memo, Suspense } from 'react';
import { Outlet } from 'react-router';
import { Box } from '@mui/material';
import { SettingsSideBarSkeleton } from '@components/UI/Skeleton';
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
      <Box sx={styles.sideBar}>
        <Suspense fallback={<SettingsSideBarSkeleton />}>
          <MemoizedSettingsSideBar />
        </Suspense>
      </Box>
      <Outlet />
    </Box>
  );
};

export default SettingsPage;
