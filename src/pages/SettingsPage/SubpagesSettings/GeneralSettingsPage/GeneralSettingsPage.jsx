import { lazy, memo, Suspense } from 'react';
import { Box } from '@mui/material';
import { styles } from '@pages/SettingsPage/SubpagesSettings/SubpagesSettingsPages.styles';
import { TitleSettingSkeleton } from '@components/UI/Skeleton';

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

const MemoizedSettingsTitle = memo(SettingsTitle);
const MemoizedChangeEmail = memo(ChangeEmail);

const GeneralSettingsPage = () => {
  return (
    <Box sx={styles.wrapper}>
      <Suspense fallback={<TitleSettingSkeleton />}>
        <MemoizedSettingsTitle title='settings.general.title' />
      </Suspense>
      <Box sx={styles.section}>
        <Suspense fallback={<div>Loading...</div>}>
          <MemoizedChangeEmail />
        </Suspense>
      </Box>
    </Box>
  );
};

export default GeneralSettingsPage;
