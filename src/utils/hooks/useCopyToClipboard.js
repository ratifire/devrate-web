import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';

const useCopyToClipboard = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  return async (dataToCopy) => {
    try {
      await navigator.clipboard.writeText(dataToCopy);
      enqueueSnackbar(t('clipboardMessage.success'), { variant: 'success' });
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      enqueueSnackbar(t('clipboardMessage.error'), { variant: 'error' });
    }
  };
};

export default useCopyToClipboard;
