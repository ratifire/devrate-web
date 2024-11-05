import React from 'react';
import styles from './HeroSection.module.scss';

const HeroSection = () => {
  return (
    <section>
      <div className={`container ${styles.hero}`}>
        <div className={styles.hero__left}>
          <h1>
            Prepare for <span className={styles.highlight}>Technical Interviews</span> with support from{' '}
            <span className={styles.emphasis}>Experts and Peers!</span>
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

          <div >
            <button className='btn btn-primary btn-m'>Registration</button>
            <button className='btn btn-secondary btn-m'>Login</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
