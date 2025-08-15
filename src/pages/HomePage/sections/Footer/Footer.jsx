import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.svg';
import linkdin from '../../assets/linkdin.svg';
import mail from '../../assets/mail.svg';
import ratifire from '../../assets/fstirier.svg';
import styles from './footer.module.scss';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer} id='contacts'>
      <div className='container'>
        <div className={styles.footer__container}>
          <div className={styles.footer__content}>
            <div className={styles.footer__socialContainer}>
              <div className={styles.footer__social}>
                <a className={styles.footer__logo} href='#home'>
                  <img alt='Skillzzy Logo' className={styles.footer__logo} src={logo} />
                </a>
                <div className={styles.footer__socialIcons}>
                  <a aria-label='LinkedIn' href='https://www.linkedin.com/company/ratifire/'>
                    <img alt='LinkedIn Icon' src={linkdin} />
                  </a>
                  <a aria-label='Email' href='mailto:info@skillzzy.com'>
                    <img alt='Mail Icon' src={mail} />
                  </a>
                </div>
              </div>
              <p className={styles.footer__descriptions}>{t('home.footer.footerText')}</p>
            </div>
            <div>
              <div className={styles.footer__developer}>
                <div className={styles.footer__developerName}>
                  <p>{t('home.footer.developedText')}</p>
                  <a aria-label='ratifire'>
                    <img alt='ratifire' src={ratifire} />
                  </a>
                </div>
                <a
                  className={styles.footer__developerLink}
                  href='https://ratifire.org/'
                  rel='noreferrer noopener'
                  target='_blank'
                >
                  ratifire.org
                </a>
                <div className={styles.footer__policies}>
                  <a className={styles.footer__policyLink} href='#'>
                    {t('home.footer.termsAndConditions')}
                  </a>
                  <a className={styles.footer__policyLink} href='#'>
                    {t('home.footer.privacyPolicy')}
                  </a>
                </div>
              </div>
              <div className={styles.footer__copyright}>
                <p className={styles.footer__copyrightYear}>
                  © {new Date().getFullYear()} Skillzzy, Inc. {t('home.footer.allRightsReserved')}
                </p>
                <p className={styles.footer__trademarks}>{t('home.footer.allTrademarks')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
