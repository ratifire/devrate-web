import React from 'react';
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
            <div className={styles.footer__social}>
              <a className={styles.footer__logo} href='#home'>
                <img src={logo} alt='Skillzzy Logo' />
              </a>
              <div className={styles.footer__socialIkons}>
                <a href='https://www.linkedin.com/company/ratifire/' aria-label='LinkedIn'>
                  <img src={linkdin} alt='LinkedIn Icon' />
                </a>
                <a href='mailto:info@skillzzy.com' aria-label='Email'>
                  <img src={mail} alt='Mail Icon' />
                </a>
              </div>
            </div>
            <p className={styles.footer__descriptions}>
              Technical interview training platform: elevate your skills with both beginners and experienced
              professionals. Our platform is designed to make the interview preparation process smoother and less
              stressful for everyone.
            </p>
            <div className={styles.footer__developer}>
              <div className={styles.footer__developerName}>
                <p>Developed By</p>
                <a aria-label='ratifire'>
                  <img src={ratifire} alt='ratifire' />
                </a>
              </div>
              <a href='#' target='_blank' className={styles.footer__developerLink}>
                ratifire.org
              </a>
              <div className={styles.footer__policies}>
                <a href='#' className={styles.footer__policyLink}>
                  Terms and conditions
                </a>
                <a href='#' className={styles.footer__policyLink}>
                  Privacy Policy
                </a>
              </div>
            </div>
            <div className={styles.footer__copyright}>
              <p className={styles.footer__copyrightYear}>© 2024 Devrate, Inc. All rights reserved.</p>
              <p className={styles.footer__trademarks}>
                All trademarks, logos, and brand names are the property of their respective owners.
              </p>
            </div>
          </div>
          <div className={styles.contactForm}>
            <h2 className={styles.contactForm__title}>
              <span className={styles.contactForm__titleFocus}>Get</span> In Touch
            </h2>
            <form className={styles.contactForm__form}>
              <input type='text' className={styles.contactForm__input} placeholder='Name Surname' />
              <input type='email' className={styles.contactForm__input} placeholder='Enter your email' />
              <textarea className={styles.contactForm__textarea} placeholder='Enter your request...'></textarea>
              <button type='submit' className={`btn btn-primary btn-m ${styles.contactForm__button}`}>
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
