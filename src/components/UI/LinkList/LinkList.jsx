import PropTypes from 'prop-types';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router';
import { useTranslation } from 'react-i18next';

const LinkList = ({ links, componentStyles }) => {
  const { t } = useTranslation();

  return (
    <>
      {links.map(({ name, path }) => (
        <Link key={path} component={RouterLink} sx={componentStyles.link} to={path}>
          {t(name)}
        </Link>
      ))}
    </>
  );
};

LinkList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
  componentStyles: PropTypes.object,
};

export default LinkList;
