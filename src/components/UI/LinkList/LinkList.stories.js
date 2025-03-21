import { BrowserRouter as Router } from 'react-router';
import navLinks from '@utils/constants/navLinks';
import legalInfoLinks from '@utils/constants/legalInfoLinks';
import headerStyles from '@components/PageComponents/LandingComponents/Header/Header.styles';
import footerStyles from '@components/PageComponents/LandingComponents/Footer/Footer.styles';
import { decorators } from '../../../../.storybook/preview';
import LinkList from './LinkList';

export default {
  title: 'UI/LinkList',
  component: LinkList,
  tags: ['autodocs'],
  decorators: decorators,
  parameters: {
    layout: 'centered',
  },
};

export const Header = () => (
  <Router>
    <LinkList componentStyles={headerStyles} links={navLinks} />
  </Router>
);
export const Footer = () => (
  <Router>
    <LinkList componentStyles={footerStyles} links={legalInfoLinks} />
  </Router>
);
