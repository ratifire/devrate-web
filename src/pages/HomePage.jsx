import React, { useEffect } from 'react';
import { AboutSection, Footer, Header, HeroSection } from '../components/Sections';
import { HomeTemplate } from '../Templates';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../redux/auth/authSlice';
import Cookies from 'js-cookie';

const HomePage = () => {
  const dispatch = useDispatch();
  const cookies = Cookies.get('JSESSIONID');

  useEffect(() => {
    dispatch(setCredentials({ isAuthenticated: Boolean(cookies) }));
  }, [cookies]);

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
