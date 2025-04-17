import { useTranslation } from 'react-i18next';
import styles from './AboutUsSection.module.scss';

const AboutUsSection = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.about} id='about'>
      <div className='container'>
        <h2 className={styles.heading}>
          {t('home.aboutUs.title1Part')} <span className={styles.highlight}>{t('home.aboutUs.title2Part')}</span>
        </h2>
        <div className={styles.gridContainer}>
          <div className={`${styles.card} ${styles.topLeft}`}>
            <h3 className={styles.topLeft}>{t('home.aboutUs.article1Title')}</h3>
            <p>{t('home.aboutUs.article1Text')}</p>
          </div>
          <div className={`${styles.card} ${styles.topRight} ${styles.dnMobile}`}>
            <h3 className={styles.topRight}>{t('home.aboutUs.article2Title')}</h3>
            <p>{t('home.aboutUs.article2Text')}</p>
          </div>
          <div className={`${styles.card} ${styles.botLeft}`}>
            <h3 className={styles.botLeft}>{t('home.aboutUs.article3Title')}</h3>
            <p>{t('home.aboutUs.article3Text')}</p>
          </div>
          <div className={styles.favBigRight} />
          <div className={styles.favBigLeft} />
          <div className={`${styles.card} ${styles.botRight}`}>
            <h3 className={styles.botRight}>{t('home.aboutUs.article4Title')}</h3>
            <p>{t('home.aboutUs.article4Text')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
