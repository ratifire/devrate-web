import React from 'react';
import SocialsLinkList from './SocialsLinkList';
import { decorators } from '../../../../.storybook/preview';
import socials from '../../../utils/constants/socials';
import styles from '../..//PageComponents/LandingComponents/Footer/Footer.styles';
import { BrowserRouter as Router } from 'react-router-dom'; 

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
    <SocialsLinkList socials={socials} componentStyles={styles} />
  </Router>
);
