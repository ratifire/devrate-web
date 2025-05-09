import { lazy, memo, Suspense } from 'react';
import { Box } from '@mui/material';
import { styles } from '@pages/SettingsPage/SubpagesSettings/SubpagesSettingsPages.styles';
import { TitleSettingSkeleton } from '@components/UI/Skeleton';

const SettingsTitle = lazy(() =>
  import('@components/PageComponents/SettingsComponents/index.js').then((module) => ({
    default: module.SettingsTitle,
  }))
);

const MemoizedSettingsTitle = memo(SettingsTitle);

const GeneralSettingsPage = () => {
  return (
    <Box sx={styles.wrapper}>
      <Suspense fallback={<TitleSettingSkeleton />}>
        <MemoizedSettingsTitle title='settings.general.title' />
      </Suspense>
    </Box>
  );
};

export default GeneralSettingsPage;
