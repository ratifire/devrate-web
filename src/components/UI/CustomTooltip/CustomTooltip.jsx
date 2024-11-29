import * as React from 'react';
import { tooltipClasses, Tooltip, styled } from '@mui/material';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const CustomTooltip = styled(({ translate, className, children, title, ...props }) => {
  const { t } = useTranslation();

  const renderChildren = () => {
    if (translate && typeof children === 'string') return <span>{t(children)}</span>;

    return typeof children === 'string' ? <span>{children}</span> : children;
  };

  return (
    <Tooltip arrow classes={{ popper: className }} placement='top-start' title={t(title)} {...props}>
      {renderChildren()}
    </Tooltip>
  );
})(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.experienceSkillSect.tooltip.backgroundColor,
    color: theme.palette.text.primary,
    fontSize: '16px',
    padding: '2px 8px',
    borderRadius: theme.shape.borderRadius,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.experienceSkillSect.tooltip.backgroundColor,
  },
}));

CustomTooltip.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  translate: PropTypes.bool,
};

CustomTooltip.defaultProps = {
  className: '',
  translate: false,
};

export default CustomTooltip;
