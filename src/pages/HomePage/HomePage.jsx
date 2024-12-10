import { memo } from 'react';
import { HomeTemplate } from '../../Templates';
import { Header, HeroSection, HowItWorksSection, AboutUsSection, FaqSection, Footer } from './../HomePage/sections';
import './styles/reset.css';
import './styles/index.css';
import './assets/fonts/fonts.css';

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
