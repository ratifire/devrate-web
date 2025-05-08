import { lazy, memo, Suspense } from 'react';
import { Box } from '@mui/material';
import { styles } from '@pages/SettingsPage/SubpagesSettings/SubpagesSettingsPages.styles';
import { TitleSettingSkeleton } from '@components/UI/Skeleton';

const GeneralTitle = lazy(() =>
  import('@components/PageComponents/SettingsComponents/index.js').then((module) => ({
    default: module.GeneralTitle,
  }))
);

const MemoizedGeneralTitle = memo(GeneralTitle);

const GeneralSettingsPage = () => {
  return (
    <Box sx={styles.wrapper}>
      <Suspense fallback={<TitleSettingSkeleton />}>
        <MemoizedGeneralTitle />
      </Suspense>
    </Box>
  );
};

export default GeneralSettingsPage;
