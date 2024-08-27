import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const StyledRouterLink = styled(RouterLink)(({ theme }) => ({
  fontSize: theme.typography.subtitle3.fontSize,
  lineHeight: theme.typography.subtitle3.lineHeight,
  fontWeight: theme.typography.subtitle3.fontWeight,
  letterSpacing: theme.typography.subtitle3.letterSpacing,
  textDecoration: 'underline',
  color: theme.palette.text.primary,
}));

export default StyledRouterLink;
