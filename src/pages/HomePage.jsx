import React, { useEffect } from 'react';
import { AboutSection, Footer, Header, HeroSection } from '../components/Sections';
import { HomeTemplate } from '../Templates';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../redux/auth/authSlice';
import { useCookies } from 'react-cookie';

const HomePage = () => {
  const dispatch = useDispatch();
  const [cookies] = useCookies('JSESSIONID');

  useEffect(() => {
    dispatch(setCredentials({ isAuthenticated: Boolean(cookies.JSESSIONID) }));
  }, [cookies.JSESSIONID]);

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
