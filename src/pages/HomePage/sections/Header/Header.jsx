import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';
import linkdin from '../../assets/linkdin.svg';
import mail from '../../assets/mail.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header__bg} id='home'>
      <div className='container'>
        <div className={styles.header}>
          <Link to={'/'} className={styles.header__logo}>
            <img src={logo} alt='Skillzzy Logo' />
          </Link>

          <nav className={styles.header__nav}>
            <ul className={styles.header__nav__links}>
              <li>
                <a href='#howItWorks'>How It Works</a>
              </li>
              <li>
                <a href='#about'>About us</a>
              </li>
              <li>
                <a href='#faq'>FAQ</a>
              </li>
              <li>
                <a href='#contacts'>Contacts</a>
              </li>
            </ul>
          </nav>

          <div className={styles.header__socialIcons}>
            <a href='https://www.linkedin.com' aria-label='LinkedIn'>
              <img src={linkdin} alt='LinkedIn Icon' />
            </a>
            <a href='mailto:info@skillzzy.com' aria-label='Email'>
              <img src={mail} alt='Mail Icon' />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
