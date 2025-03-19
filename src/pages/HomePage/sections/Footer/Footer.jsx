import logo from '../../assets/logo.svg';
import linkdin from '../../assets/linkdin.svg';
import mail from '../../assets/mail.svg';
import ratifire from '../../assets/fstirier.svg';
import styles from './footer.module.scss';

const Footer = () => {
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
              <p className={styles.footer__descriptions}>
                Technical interview training platform: elevate your skills with both beginners and experienced
                professionals. Our platform is designed to make the interview preparation process smoother and less
                stressful for everyone.
              </p>
            </div>
            <div>
              <div className={styles.footer__developer}>
                <div className={styles.footer__developerName}>
                  <p>Developed By</p>
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
                    Terms and conditions
                  </a>
                  <a className={styles.footer__policyLink} href='#'>
                    Privacy Policy
                  </a>
                </div>
              </div>
              <div className={styles.footer__copyright}>
                <p className={styles.footer__copyrightYear}>© 2025 Skillzzy, Inc. All rights reserved.</p>
                <p className={styles.footer__trademarks}>
                  All trademarks, logos, and brand names are the property of their respective owners.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.contactForm}>
            <div className={styles.contactForm__titleContainer}>
              <h2 className={styles.contactForm__title}>
                <span className={styles.contactForm__titleFocus}>Get</span> In Touch
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
              <input className={styles.contactForm__input} placeholder='Name Surname' type='text' />
              <input className={styles.contactForm__input} placeholder='Enter your email' type='email' />
              <textarea className={styles.contactForm__textarea} placeholder='Enter your request...' />
              <button className={`btn btn-primary btn-m ${styles.contactForm__button}`} type='submit'>
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
