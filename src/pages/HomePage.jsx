import React from 'react';
import { AboutSection, Footer, Header, HeroSection } from '../components/Sections';
import { HomeTemplate } from '../Templates';

const HomePage = () => {
  return (
    <HomeTemplate>
      <Header />
      <HeroSection />
      <AboutSection />
      <Footer />
    </HomeTemplate>
  );
};
export default HomePage;
