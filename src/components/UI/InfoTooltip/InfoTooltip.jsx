import { IconButton, Tooltip } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { styles } from './InfoTooltip.styles.js';

const InfoTooltip = ({ title, additionalStyles }) => {
  const { t } = useTranslation();
  return (
    <Tooltip placement='top-end' title={t(title)}>
      <IconButton sx={[styles.iconBtn, ...(additionalStyles ? [additionalStyles] : [])]}>
        <InfoOutlinedIcon />
      </IconButton>
    </Tooltip>
  );
};

InfoTooltip.propTypes = {
  title: PropTypes.string.isRequired,
  additionalStyles: PropTypes.object,
};

export default InfoTooltip;
