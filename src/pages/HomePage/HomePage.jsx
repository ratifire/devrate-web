import { memo } from 'react';
import { HomeTemplate } from '../../Templates';
import { AboutUsSection, FaqSection, Footer, HowItWorksSection } from './../HomePage/sections';
import './styles/reset.css';
import './styles/index.css';
import './assets/fonts/fonts.css';
import './styles/scss/index.scss';
import { Header, HeroSection } from './sections';

const MemoizedHeader = memo(Header);
const MemoizedHeroSection = memo(HeroSection);
const MemoizedHowItWorksSection = memo(HowItWorksSection);
const MemoizedAboutSection = memo(AboutUsSection);
const MemoizedFqaSection = memo(FaqSection);
const MemoizedFooter = memo(Footer);

const HomePage = () => {
  return (
    <HomeTemplate>
      <MemoizedHeader />
      <MemoizedHeroSection />
      <MemoizedHowItWorksSection />
      <MemoizedAboutSection />
      <MemoizedFqaSection />
      <MemoizedFooter />
    </HomeTemplate>
  );
};

export default HomePage;
