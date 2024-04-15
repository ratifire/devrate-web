import React from 'react';
import LinkList from './LinkList';
import { decorators } from '../../../../.storybook/preview';
import navLinks from '../../../utils/constants/navLinks';
import legalInfoLinks from '../../../utils/constants/legalInfoLinks';
import headerStyles from '../../Sections/Header/Header.styles';
import footerStyles from '../../Sections/Footer/Footer.styles';
import { BrowserRouter as Router } from 'react-router-dom';

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
    <LinkList links={navLinks} componentStyles={headerStyles} />
  </Router>
);
export const Footer = () => (
  <Router>
    <LinkList links={legalInfoLinks} componentStyles={footerStyles} />
  </Router>
);
