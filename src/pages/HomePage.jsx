import React, { useEffect } from 'react';
import { AboutSection, Footer, Header, HeroSection } from '../components/Sections';
import { HomeTemplate } from '../Templates';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../redux/auth/authSlice';
import getCookie from '../utils/helpers/getCookie';

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCredentials({ isAuthenticated: Boolean(getCookie('JSESSIONID')) }));
  }, [getCookie('JSESSIONID')]);
  console.log(Boolean(getCookie('JSESSIONID')));
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
