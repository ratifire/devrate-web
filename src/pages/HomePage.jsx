import React from 'react';
import { AboutSection, Footer, Header, HeroSection } from '../components/Sections';
import { HomeTemplate } from '../Templates';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const HomePage = () => {
  const token = useSelector((state) => state.auth.token);

  if (token) {
    return <Navigate to='/profile' />;
  }

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
