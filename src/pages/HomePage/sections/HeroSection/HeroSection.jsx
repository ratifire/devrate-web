import React from 'react';
import styles from './HeroSection.module.scss';

const HeroSection = () => {
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
              <p>
                Master your interview skills with real-world practice alongside experts and peers. Get personalized
                feedback, objective evaluations, and in-depth insights to confidently prepare for success in any
                interview!
              </p>
            </div>

            <div className={styles.btn__container}>
              <button className={`btn btn-primary btn-xl ${styles.registration}`}>
                <span>Registration</span>
                <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M10.0002 3.33334L8.82516 4.50834L13.4752 9.16667H3.3335V10.8333H13.4752L8.82516 15.4917L10.0002 16.6667L16.6668 10L10.0002 3.33334Z'
                    fill='white'
                  />
                </svg>
              </button>
              <button className={`btn btn-secondary btn-xl ${styles.login}`}>
                <span>Login</span>
                <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M10.0002 3.33334L8.82516 4.50834L13.4752 9.16667H3.3335V10.8333H13.4752L8.82516 15.4917L10.0002 16.6667L16.6668 10L10.0002 3.33334Z'
                    fill='white'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
