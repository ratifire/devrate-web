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
          <div className={styles.contactForm}>
            <div className={styles.contactForm__titleContainer}>
              <h2 className={styles.contactForm__title}>
                <span className={styles.contactForm__titleFocus}>{t('home.footer.formPart1')} </span>
                {t('home.footer.formPart2')}
              </h2>
              <div className={styles.contactForm__socialIcons}>
                <a
                  aria-label='LinkedIn'
                  className={styles.contactForm__socialLink}
                  href='https://www.linkedin.com/company/ratifire/'
                >
                  <img alt='LinkedIn Icon' className={styles.contactForm__socialLink} src={linkdin} />
                </a>
                <a aria-label='Email' className={styles.contactForm__socialLink} href='mailto:info@skillzzy.com'>
                  <img alt='Mail Icon' className={styles.contactForm__socialLink} src={mail} />
                </a>
              </div>
            </div>
            <form className={styles.contactForm__form}>
              <input className={styles.contactForm__input} placeholder={t('home.footer.placeholderName')} type='text' />
              <input
                className={styles.contactForm__input}
                placeholder={t('home.footer.placeholderEmail')}
                type='email'
              />
              <textarea className={styles.contactForm__textarea} placeholder={t('home.footer.placeholderRequest')} />
              <button className={`btn btn-primary btn-m ${styles.contactForm__button}`} type='submit'>
                {t('home.footer.buttonText')}{' '}
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
