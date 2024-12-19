import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { styles } from './LanguageLevel.styles';

const LanguageLevel = ({ language, level, tobeDeleted, languageDeleteHandler }) => {
  const { t } = useTranslation();
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.language}>{language}</Box>
      <Typography sx={styles.level} variant='caption3'>
        {t(`specialization.language.level.${level}`)}
      </Typography>
      {tobeDeleted && (
        <IconButton sx={styles.icon} onClick={() => languageDeleteHandler(language)}>
          <CloseIcon />
        </IconButton>
      )}
    </Box>
  );
};

LanguageLevel.propTypes = {
  language: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  tobeDeleted: PropTypes.bool,
  languageDeleteHandler: PropTypes.func,
};

export default LanguageLevel;
