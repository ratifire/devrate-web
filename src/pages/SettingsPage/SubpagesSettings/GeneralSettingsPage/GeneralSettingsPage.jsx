import { lazy, memo, Suspense } from 'react';

const SettingsGeneral = lazy(() =>
  import('@components/PageComponents/SettingsComponents/index.js').then((module) => ({
    default: module.SettingsGeneral,
  }))
);

const MemoizedSettingsGeneral = memo(SettingsGeneral);

const GeneralSettingsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MemoizedSettingsGeneral />
    </Suspense>
  );
};

export default GeneralSettingsPage;
