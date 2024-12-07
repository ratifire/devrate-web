import React from 'react';
import { BrowserRouter as Router } from 'react-router';
import { decorators } from '../../../../.storybook/preview';
import socials from '../../../utils/constants/socials';
import styles from '../..//PageComponents/LandingComponents/Footer/Footer.styles';
import SocialsLinkList from './SocialsLinkList';

export default {
  title: 'UI/SocialsLinkList',
  component: SocialsLinkList,
  tags: ['autodocs'],
  decorators: decorators,
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => (
  <Router>
    <SocialsLinkList componentStyles={styles} socials={socials} />
  </Router>
);
