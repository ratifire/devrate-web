import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Link as RouterLink } from 'react-router-dom';
import { openModal } from '../../../../redux/modal/modalSlice';
import navigationsLinks from '../../../../router/links';
import { ReactComponent as Arrow } from '../../assets/iconArrow.svg';
import styles from './HeroSection.module.scss';

const HeroSection = () => {
  const dispatch = useDispatch();
  const handleOpenRegistration = () => dispatch(openModal({ modalName: 'openRegistration' }));
  const handleOpenLogin = () => dispatch(openModal({ modalName: 'openLogin' }));

  const isAuthenticated = useSelector((state) => state.auth.user?.isAuthenticated || false);
  const myProfile = () => {
    if (!isAuthenticated)
      return (
        <button className={`btn btn-secondary btn-xl ${styles.login}`} onClick={handleOpenLogin}>
          <span>Login</span>
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
              Prepare for
              <span className={styles.highlight}>
                Technical
                <br /> Interviews
              </span>
              with support
              <br /> from <span className={styles.emphasis}>Experts and Peers!</span>
            </h1>
          </div>

          <div className={styles.hero__right}>
            <div>
              <div>
                <p>
                  Master your interview skills with real-world practice alongside experts and peers. Get personalized
                  feedback, objective evaluations, and in-depth insights to confidently prepare for success in any
                  interview!
                </p>
              </div>

              <div className={styles.btnContainer}>
                <button className={`btn btn-primary btn-xl ${styles.registration}`} onClick={handleOpenRegistration}>
                  <span>Registration</span>
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
