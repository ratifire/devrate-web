import './styles/scss/homePage.scss';
import { memo } from 'react';
import ModalComponent from '@components/ModalsComponents/ModalComponent.jsx';
import './assets/fonts/fonts.css';
import './styles/reset.css';
import './styles/index.css';
import './styles/scss/index.scss';
import { withAuth } from '@utils/hoc/index';
import { AboutUsSection, FaqSection, Footer, HowItWorksSection } from './../HomePage/sections';
import { Header, HeroSection } from './sections';

const MemoizedHeader = memo(Header);
const MemoizedHeroSection = memo(HeroSection);
const MemoizedHowItWorksSection = memo(HowItWorksSection);
const MemoizedAboutSection = memo(AboutUsSection);
const MemoizedFqaSection = memo(FaqSection);
const MemoizedFooter = memo(Footer);

const HomePage = withAuth(() => {
  return (
    <div className='homePage'>
      <MemoizedHeader />
      <MemoizedHeroSection />
      <MemoizedHowItWorksSection />
      <MemoizedAboutSection />
      <MemoizedFqaSection />
      <MemoizedFooter />
      <ModalComponent />
    </div>
  );
});

export default HomePage;
