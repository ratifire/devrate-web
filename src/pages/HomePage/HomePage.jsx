import './styles/scss/homePage.scss';
import { memo, useEffect } from 'react';
import ModalComponent from '@components/ModalsComponents/ModalComponent.jsx';
import './assets/fonts/fonts.css';
import './styles/reset.css';
import './styles/index.css';
import './styles/scss/index.scss';
import { useOAuthAuthorizeMutation } from '@redux/api/slices/auth/authApiSlice.js';
import { setCredentials } from '@redux/slices/auth/authSlice.js';
import { setTokens } from '@redux/slices/auth/tokenSlice.js';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { AboutUsSection, FaqSection, Footer, HowItWorksSection } from './../HomePage/sections';
import { Header, HeroSection } from './sections';

const MemoizedHeader = memo(Header);
const MemoizedHeroSection = memo(HeroSection);
const MemoizedHowItWorksSection = memo(HowItWorksSection);
const MemoizedAboutSection = memo(AboutUsSection);
const MemoizedFqaSection = memo(FaqSection);
const MemoizedFooter = memo(Footer);

const HomePage = () => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get('code');
  const state = params.get('state');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useOAuthAuthorizeMutation({ code, state }, { skip: !code || !state });

  useEffect(() => {
    if (!data) return;

    const { userData, idToken, authToken } = data;
    dispatch(setCredentials({ data: userData }));

    if (idToken && authToken) {
      dispatch(setTokens({ idToken, authToken }));
      navigate('/profile', { replace: true });
    }
  }, [data]);

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
};

export default HomePage;
