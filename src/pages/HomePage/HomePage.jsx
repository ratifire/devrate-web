import Cookies from 'js-cookie';
import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AboutSection, Footer, HeroSection } from '../../components/PageComponents/LandingComponents';
import { Header } from './../HomePage/sections';
import { setCredentials } from '../../redux/auth/authSlice';
import { HomeTemplate } from '../../Templates';
import './styles/reset.css';
import './styles/index.css';

const MemoizedHeader = memo(Header);
const MemoizedHeroSection = memo(HeroSection);
const MemoizedAboutSection = memo(AboutSection);
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
      <MemoizedFooter />
    </HomeTemplate>
  );
};

export default HomePage;
