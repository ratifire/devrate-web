import { useTranslation } from 'react-i18next';
import { Box, Button, Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { DARK_THEME } from '@utils/constants/Theme/theme.js';
import { useModalController } from '@utils/hooks/useModalController.js';
import { modalNames } from '@utils/constants/modalNames.js';
import { styles } from './EmptyInterviewTab.styles.js';

const EmptyPassedInterviewsPage = ({ tab, svg, isSpecializations }) => {
  const { t } = useTranslation();
  const { openModal } = useModalController();
  const { mode } = useSelector((state) => state.theme);
  let SvgComponent = null;
  if (svg && typeof svg === 'object' && svg.dark && svg.light) {
    SvgComponent = mode === DARK_THEME ? svg.dark : svg.light;
  } else if (svg && typeof svg === 'function') {
    SvgComponent = svg;
  } else {
    // eslint-disable-next-line react/display-name
    SvgComponent = () => <></>;
  }

  const handlerCreateSpecialization = () => {
    openModal(modalNames.specializationModal);
  };

  if (isSpecializations) {
    return (
      <Container maxWidth='xl' sx={styles.container}>
        <Box sx={styles.contentWrapper}>
          <SvgComponent />
          <Typography sx={styles.text} variant='subtitle1'>
            {t(`interviews.emptyInterviewTabs.empty${tab}`)}
          </Typography>
        </Box>
      </Container>
    );
  }
  return (
    <Container maxWidth='xl' sx={styles.container}>
      <Box sx={[styles.contentWrapper, styles.emptySpec]}>
        <SvgComponent />
        <Box sx={styles.contentBox}>
          <Typography sx={[styles.text, styles.textSpec]} variant='subtitle1'>
            {t(`interviews.emptyInterviewTabs.emptySpecialization`)}
          </Typography>
          <Button
            color='primary'
            sx={styles.specBtn}
            type='button'
            variant='contained'
            onClick={handlerCreateSpecialization}
          >
            {t('specialization.modal.specialization.create')}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
EmptyPassedInterviewsPage.propTypes = {
  tab: PropTypes.string.isRequired,
  svg: PropTypes.oneOfType([
    PropTypes.shape({
      dark: PropTypes.elementType.isRequired,
      light: PropTypes.elementType.isRequired,
    }),
    PropTypes.elementType,
  ]).isRequired,
  isSpecializations: PropTypes.bool,
};
export default EmptyPassedInterviewsPage;
