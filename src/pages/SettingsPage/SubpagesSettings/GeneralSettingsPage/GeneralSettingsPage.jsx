import { lazy, memo, Suspense } from 'react';
import { Box } from '@mui/material';
import { ChangeEmailSkeleton, TitleSettingSkeleton, ChangePasswordSkeleton } from '@components/UI/Skeleton';
import { styles } from './GeneralSettingsPage.styles';

const SettingsTitle = lazy(() =>
  import('@components/PageComponents/SettingsComponents/index.js').then((module) => ({
    default: module.SettingsTitle,
  }))
);

const ChangeEmail = lazy(() =>
  import('@components/PageComponents/SettingsComponents/index.js').then((module) => ({
    default: module.ChangeEmail,
  }))
);

const ChangePassword = lazy(() =>
  import('@components/PageComponents/SettingsComponents/index.js').then((module) => ({
    default: module.ChangePassword,
  }))
);

const MemoizedSettingsTitle = memo(SettingsTitle);
const MemoizedChangeEmail = memo(ChangeEmail);
const MemoizedChangePassword = memo(ChangePassword);

const GeneralSettingsPage = () => {
  return (
    <Box sx={styles.wrapper}>
      <Suspense fallback={<TitleSettingSkeleton />}>
        <MemoizedSettingsTitle title='settings.general.title' />
      </Suspense>
      <Box sx={styles.container}>
        <Box sx={styles.section}>
          <Suspense fallback={<ChangeEmailSkeleton />}>
            <MemoizedChangeEmail />
          </Suspense>
        </Box>
        <Box sx={styles.section}>
          <Suspense fallback={<ChangePasswordSkeleton />}>
            <MemoizedChangePassword />
          </Suspense>
        </Box>
      </Box>
    </Box>
  );
};

export default GeneralSettingsPage;
