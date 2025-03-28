import { useDispatch, useSelector } from 'react-redux';
import { Link, Link as RouterLink } from 'react-router';
import { openModal } from '@redux/slices/modal/modalSlice';
import { modalNames } from '@utils/constants/modalNames.js';
import navigationsLinks from '@router/links';
import { useTranslation } from 'react-i18next';
import Arrow from '../../assets/iconArrow.svg?react';
import styles from './HeroSection.module.scss';

const HeroSection = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.tokens);
  const { t } = useTranslation();

  const handleOpenRegistration = () => dispatch(openModal({ modalType: modalNames.registrationModal }));
  const handleOpenLogin = () => dispatch(openModal({ modalType: modalNames.loginModal }));

  const myProfile = () => {
    if (!isAuth)
      return (
        <button className={`btn btn-secondary btn-xl ${styles.login}`} onClick={handleOpenLogin}>
          <span>{t('home.hero.login')}</span>
          <Arrow />
        </button>
      );
    return (
      <Link className={`btn btn-secondary btn-xl ${styles.login}`} component={RouterLink} to={navigationsLinks.profile}>
        Profile
        <Arrow />
      </Link>
    );
  };

  return (
    <section className={styles.hero__bg}>
      <div className='container'>
        <div className={styles.hero}>
          <div className={styles.hero__left}>
            <h1>
              <div className={styles.h1Desktop}>
                Prepare for
                <span className={styles.highlight}>
                  Technical
                  <br /> Interviews
                </span>
                with support
                <br /> from <span className={styles.emphasis}>Experts and Peers!</span>
              </div>

              <div className={styles.h1Phone}>
                Unfortunately, we don&#39;t have a mobile version yet ;(
                <span className={styles.emphasis}>But that&#39;s just for now!</span>
              </div>
            </h1>
          </div>

          <div className={styles.hero__right}>
            <div className={styles.heroWrapper}>
              <div>
                <p className={styles.heroText}>{t('home.hero.secondaryText')}</p>
                <p className={styles.heroTextMobile}>{t('home.hero.secondaryTextMobile')}</p>
              </div>

              <div className={styles.btnContainer}>
                <button className={`btn btn-primary btn-xl ${styles.registration}`} onClick={handleOpenRegistration}>
                  <span>{t('home.hero.registration')}</span>
                  <Arrow />
                </button>
                {myProfile()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
