import Cookies from 'js-cookie';
import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AboutSection } from '../../components/PageComponents/LandingComponents';
import { Header, HeroSection, FaqSection, Footer } from './../HomePage/sections';
import { setCredentials } from '../../redux/auth/authSlice';
import { HomeTemplate } from '../../Templates';
import './styles/reset.css';
import './styles/index.css';
import './assets/fonts/fonts.css';

const MemoizedHeader = memo(Header);
const MemoizedHeroSection = memo(HeroSection);
const MemoizedAboutSection = memo(AboutSection);
const MemoizedFqaSection = memo(FaqSection);
const MemoizedFooter = memo(Footer);

const HomePage = () => {
  const dispatch = useDispatch();
  const cookies = Cookies.get('JSESSIONID');

  useEffect(() => {
    dispatch(setCredentials({ isAuthenticated: Boolean(cookies) }));
  }, [cookies, dispatch]);

  return (
    <HomeTemplate>
      <MemoizedHeader />
      <MemoizedHeroSection />
      <MemoizedAboutSection />
      <MemoizedFqaSection />
      <MemoizedFooter />
    </HomeTemplate>
  );
};

export default HomePage;
