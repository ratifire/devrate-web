import { useDispatch } from 'react-redux';
import { openModal } from '@redux/slices/modal/modalSlice';
import { modalNames } from '@utils/constants/modalNames.js';
import { useTranslation } from 'react-i18next';
import Arrow from '../../assets/iconArrow.svg?react';
import heroMascot from '../../assets/hero/mascotHero.svg';
import styles from './HeroSection.module.scss';

const HeroSection = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleOpenRegistration = () => dispatch(openModal({ modalType: modalNames.registrationModal }));
  return (
    <section className={styles.hero__bg}>
      <div className='container'>
        <div className={styles.hero}>
          <div className={styles.hero__left}>
            <img alt='' src={heroMascot} />
          </div>

          <div className={styles.hero__right}>
            <h1>
              <div className={styles.h1Desktop}>
                <span className={styles.highlight}>{t('home.hero.mainText1')}</span> <br />
                {t('home.hero.mainText2')} <span className={styles.emphasis}>{t('home.hero.mainText3')}</span>
              </div>
              <div className={styles.h1Phone}>
                {t('home.hero.mainTextMobile1')}
                <span className={styles.emphasis}>{t('home.hero.mainTextMobile2')}</span>
              </div>
            </h1>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
