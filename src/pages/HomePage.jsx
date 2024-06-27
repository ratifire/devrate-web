import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AboutSection, Footer, Header, HeroSection } from '../components/Sections';
import { setCredentials } from '../redux/auth/authSlice';
import { HomeTemplate } from '../Templates';

const HomePage = () => {
  const dispatch = useDispatch();
  const cookies = Cookies.get('JSESSIONID');

  useEffect(() => {
    dispatch(setCredentials({ isAuthenticated: Boolean(cookies) }));
  }, [cookies, dispatch]);

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
