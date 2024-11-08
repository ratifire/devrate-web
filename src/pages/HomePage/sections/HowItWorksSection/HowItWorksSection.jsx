import React from 'react';
import styles from './HowItWorksSection.module.scss';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';

const howItWorksSection = () => {
  return (
    <section className={styles.bg}>
      <div className='container'>
        <div className={styles.works}>
          <div className={styles.works__block}>
            <div className={`${styles.works__left} ${styles.left1}`}>
              <h2 className={styles.works__title}>
                How It <span>Works?</span>
              </h2>
              <div className={`${styles.card__wrapper} ${styles.m1}`}>
                <div className={styles.card__title__wrapper}>
                  <div className={styles.cricle}>1</div>
                  <h3 className={styles.card__title}>Register your profile</h3>
                </div>
                <p className={styles.card__text}>
                  Create your profile and fill in information about your work experience, hard skills, achievements and
                  education.
                </p>
              </div>
            </div>
            <div className={styles.works__right}>
              <img className={styles.img1} src={img1} alt='' />
            </div>
          </div>
          <div className={styles.works__block}>
            <div className={styles.works__left}>
              <img className={styles.img2} src={img2} alt='' />
              <img className={styles.img3} src={img3} alt='' />
            </div>
            <div className={`${styles.works__right} ${styles.right2}`}>
              <div className={`${styles.card__wrapper} ${styles.m2}`}>
                <div className={styles.card__title__wrapper}>
                  <div className={styles.cricle}>2</div>
                  <h3 className={styles.card__title}>Join the Interview</h3>
                </div>
                <p className={styles.card__text}>
                  Choose whether you want to practice as a respondent or as an interviewer. Pick a convenient time and
                  format.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.works__block}>
            <div className={`${styles.works__left} ${styles.left3}`}>
              <div className={`${styles.card__wrapper} ${styles.m3}`}>
                <div className={styles.card__title__wrapper}>
                  <div className={styles.cricle}>3</div>
                  <h3 className={styles.card__title}>Receive Feedback</h3>
                </div>
                <p className={styles.card__text}>
                  Get detailed feedback to help you improve your soft and hard skills in your area of your
                  specialization.
                </p>
              </div>
            </div>
            <div className={styles.works__right}>
              <img className={styles.img4} src={img4} alt='' />
              <img className={styles.img5} src={img5} alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default howItWorksSection;
