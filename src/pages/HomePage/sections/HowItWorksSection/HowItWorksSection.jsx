import { useTranslation } from 'react-i18next';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2n.png';
import img4 from '../../assets/img4.png';
import styles from './HowItWorksSection.module.scss';
import Swiper from './HowItWorksSwiper/HowItWorksSwiper';

const HowItWorksSection = () => {
  const { t } = useTranslation();

  return (
    <section id='howItWorks'>
      <div className='container'>
        <h2 className={`${styles.titleMobile} ${styles.mainTitle}`}>
          How It <span>Works?</span>
        </h2>
        <div className={styles.works}>
          <Swiper />
          <div className={styles.works__block}>
            <div className={`${styles.works__left} ${styles.left1}`}>
              <h3 className={styles.mainTitle}>
                {t('home.howItWorks.titleText1')} <span>{t('home.howItWorks.titleText2')}</span>
              </h3>
              <div className={`${styles.card__wrapper} ${styles.m1}`}>
                <div className={styles.card__title__wrapper}>
                  <div className={styles.cricle}>1</div>
                  <h4 className={styles.card__title}>{t('home.howItWorks.card1Title')}</h4>
                </div>
                <p className={styles.card__text}>{t('home.howItWorks.card1Text')}</p>
              </div>
            </div>
            <div className={styles.works__right}>
              <img alt='' className={styles.img1} src={img1} />
            </div>
          </div>
          <div className={styles.works__block}>
            <div className={`${styles.works__left} ${styles.left2}`}>
              <img alt='' className={styles.img2} src={img2} />
            </div>
            <div className={`${styles.works__right} ${styles.right2}`}>
              <div className={`${styles.card__wrapper} ${styles.m2}`}>
                <div className={styles.card__title__wrapper}>
                  <div className={styles.cricle}>2</div>
                  <h4 className={styles.card__title}>{t('home.howItWorks.card2Title')}</h4>
                </div>
                <p className={styles.card__text}>{t('home.howItWorks.card2Text')}</p>
              </div>
            </div>
          </div>
          <div className={`${styles.works__block} ${styles.block3}`}>
            <div className={`${styles.works__left} ${styles.left3}`}>
              <div className={`${styles.card__wrapper} ${styles.m3}`}>
                <div className={styles.card__title__wrapper}>
                  <div className={styles.cricle}>3</div>
                  <h4 className={styles.card__title}>{t('home.howItWorks.card3Title')}</h4>
                </div>
                <p className={styles.card__text}>{t('home.howItWorks.card3Text')}</p>
              </div>
            </div>
            <div className={`${styles.works__right} ${styles.right3}`}>
              <img alt='' className={styles.img4} src={img4} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
