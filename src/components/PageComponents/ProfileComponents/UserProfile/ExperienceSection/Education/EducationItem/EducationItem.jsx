import { useMemo, useState } from 'react';
import { Box, Link, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styles from './EducationItem.styles';

const LENGTH_TO_COLLAPSE = 200;

const EducationItem = ({ type, name, description, startYear, endYear, icon: IconComponent }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { t } = useTranslation();

  const excerpt = useMemo(() => description.slice(0, LENGTH_TO_COLLAPSE), [description]);
  const needCollapse = description.length >= LENGTH_TO_COLLAPSE;

  return (
    <Box sx={styles.educationItemContainer}>
      <Box sx={styles.itemHeaderContainer}>
        {IconComponent && <IconComponent height={48} width={48} />}
        <Box sx={styles.logoTitleContainer}>
          <Box sx={{ marginLeft: '11px' }}>
            <Typography sx={styles.courseTitle} variant='h6'>
              {type}
            </Typography>
            <Typography sx={styles.schoolTitle} variant='subtitle3'>
              {name}
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.dateContainer}>
          {startYear} - {endYear === 9999 ? 'Now' : endYear}
        </Box>
      </Box>
      <Typography>
        {isCollapsed && needCollapse ? excerpt : description}
        &nbsp;
        {needCollapse && (
          <Link component='button' sx={styles.link} variant='subtitle3' onClick={() => setIsCollapsed(!isCollapsed)}>
            {isCollapsed ? t('profile.experienceSection.readAll') : t('profile.experienceSection.collapse')}
          </Link>
        )}
      </Typography>
    </Box>
  );
};

EducationItem.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  startYear: PropTypes.number.isRequired,
  endYear: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.string.isRequired]).isRequired,
  icon: PropTypes.elementType,
};

export default EducationItem;
