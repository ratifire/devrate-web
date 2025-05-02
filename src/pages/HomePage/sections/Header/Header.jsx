import { Link as RouterLink, Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import navigationsLinks from '@router/links.js';
import { openModal } from '@redux/slices/modal/modalSlice.js';
import { modalNames } from '@utils/constants/modalNames.js';
import { useDispatch, useSelector } from 'react-redux';
import mail from '../../assets/mail.svg';
import linkdin from '../../assets/linkdin.svg';
import logo from '../../assets/logo.svg';
import styles from './Header.module.scss';

const Header = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.tokens);
  const handleOpenLogin = () => dispatch(openModal({ modalType: modalNames.loginModal }));
  const myProfile = () => {
    if (!isAuth)
      return (
        <button className={`btn btn-secondary btn-xl ${styles.login}`} onClick={handleOpenLogin}>
          <span>{t('home.header.login')}</span>
        </button>
      );
    return (
      <Link className={`btn btn-secondary btn-xl ${styles.login}`} component={RouterLink} to={navigationsLinks.profile}>
        {t('home.header.login')}
      </Link>
    );
  };

  return (
    <header className={styles.header__bg} id='home'>
      <div className='container'>
        <div className={styles.header}>
          <Link className={styles.header__logo} to={'/'}>
            <img alt='Skillzzy Logo' src={logo} />
          </Link>

          <nav className={styles.header__nav}>
            <ul className={styles.header__nav__links}>
              <li>
                <a href='#howItWorks'> {t('home.header.howItWorks')}</a>
              </li>
              <li>
                <a href='#about'>{t('home.header.aboutUs')}</a>
              </li>
              <li>
                <a href='#faq'>{t('home.header.faq')}</a>
              </li>
              <li>
                <a href='#contacts'>{t('home.header.contacts')}</a>
              </li>
            </ul>
          </nav>
          <div className={styles.header__social_login}>
            <div className={styles.header__socialIcons}>
              <a aria-label='LinkedIn' href='https://www.linkedin.com'>
                <img alt='LinkedIn Icon' src={linkdin} />
              </a>
              <a aria-label='Email' className={styles.header__socialIcons__dn} href='mailto:info@skillzzy.com'>
                <img alt='Mail Icon' src={mail} />
              </a>
            </div>
            {myProfile()}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
// import React, { useEffect, useState } from 'react';
// import styles from './Header.module.scss';
// import logo from '../../assets/logo.svg';
// import linkdin from '../../assets/linkdin.svg';
// import mail from '../../assets/mail.svg';
// import { Link } from 'react-router';
//
// const Header = () => {
//   const [activeIcon, setActiveIcon] = useState(null);
//
//   // Эффект для добавления класса при клике
//   useEffect(() => {
//     const anchors = document.querySelectorAll('.header__socialIcons a');
//
//     anchors.forEach(anchor => {
//       anchor.addEventListener('click', (event) => {
//         const img = anchor.querySelector('img');
//
//         if (activeIcon === anchor) {
//           // Если иконка уже активна, сбрасываем эффект
//           img.style.filter = 'none';
//           setActiveIcon(null);
//         } else {
//           // Применяем эффект инвертирования цвета
//           img.style.filter = 'invert(36%) sepia(91%) saturate(1633%) hue-rotate(256deg) brightness(101%) contrast(101%)';
//           setActiveIcon(anchor);
//         }
//       });
//     });
//
//     // Очистка событий при размонтировании компонента
//     return () => {
//       anchors.forEach(anchor => {
//         anchor.removeEventListener('click', (event) => {});
//       });
//     };
//   }, [activeIcon]);
//
//   return (
//     <header className={styles.header__bg} id='home'>
//       <div className='container'>
//         <div className={styles.header}>
//           <Link to={'/'} className={styles.header__logo}>
//             <img src={logo} alt='Skillzzy Logo' />
//           </Link>
//
//           <nav className={styles.header__nav}>
//             <ul className={styles.header__nav__links}>
//               <li>
//                 <a href='#howItWorks'>How It Works</a>
//               </li>
//               <li>
//                 <a href='#about'>About us</a>
//               </li>
//               <li>
//                 <a href='#faq'>FAQ</a>
//               </li>
//               <li>
//                 <a href='#contacts'>Contacts</a>
//               </li>
//             </ul>
//           </nav>
//
//           <div className={styles.header__socialIcons}>
//             <a href='https://www.linkedin.com' aria-label='LinkedIn'>
//               <img src={linkdin} alt='LinkedIn Icon' />
//             </a>
//             <a href='mailto:info@skillzzy.com' aria-label='Email'>
//               <img src={mail} alt='Mail Icon' />
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
//
// export default Header;
