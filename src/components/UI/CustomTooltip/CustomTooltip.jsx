import { tooltipClasses, Tooltip, styled, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import useOverflowCheck from '../../../utils/hooks/useOverflowCheck.js';

const CustomTooltip = styled(({ translate, className, children, title, customStyles, variant, ...props }) => {
  const { t } = useTranslation();
  const { textRef, isOverflowing } = useOverflowCheck(children);

  const renderChildren = () => {
    return translate && typeof children === 'string' ? (
      <Typography ref={textRef} sx={customStyles} variant={variant}>
        {t(children)}
      </Typography>
    ) : typeof children === 'string' ? (
      <Typography ref={textRef} sx={customStyles} variant={variant}>
        {children}
      </Typography>
    ) : (
      children
    );
  };

  const tooltipTitle = isOverflowing ? t(title) : '';

  return (
    <Tooltip arrow classes={{ popper: className }} placement='top-start' title={tooltipTitle} {...props}>
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
  variant: PropTypes.string,
  customStyles: PropTypes.object,
};

CustomTooltip.defaultProps = {
  className: '',
  translate: false,
  customStyles: {},
  variant: 'body1',
};

export default CustomTooltip;
