import React from 'react';
import { AboutSection, Footer, Header, HeroSection } from '../components/Sections';
import { HomeTemplate } from '../Templates';

const HomePage = () => {
  // const isAuthenticated = useSelector((state) => state.auth.userId);

  // if (isAuthenticated) {
  //   return <Navigate to='/' />;
  // }

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
