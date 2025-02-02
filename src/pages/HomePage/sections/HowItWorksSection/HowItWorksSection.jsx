import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2n.png';
import img4 from '../../assets/img4.png';
import styles from './HowItWorksSection.module.scss';
import Swiper from './HowItWorksSwiper/HowItWorksSwiper';

const howItWorksSection = () => {
  return (
    <section className={styles.bg} id='howItWorks'>
      <div className='container'>
        <h2 className={`${styles.titleMobile} ${styles.mainTitle}`}>
          How It <span>Works?</span>
        </h2>
        <div className={styles.works}>
          <Swiper />
          <div className={styles.works__block}>
            <div className={`${styles.works__left} ${styles.left1}`}>
              <h3 className={styles.mainTitle}>
                How It <span>Works?</span>
              </h3>
              <div className={`${styles.card__wrapper} ${styles.m1}`}>
                <div className={styles.card__title__wrapper}>
                  <div className={styles.cricle}>1</div>
                  <h4 className={styles.card__title}>Register your profile</h4>
                </div>
                <p className={styles.card__text}>
                  Create your profile and fill in information about your work experience, hard skills, achievements and
                  education.
                </p>
              </div>
            </div>
            <div className={styles.works__right}>
              <img alt='' className={styles.img1} src={img1} />
            </div>
          </div>
          <div className={styles.works__block}>
            <div className={`${styles.works__left} ${styles.left2}`}>
              <img alt='' className={styles.img2} src={img2} />
            </div>
            <div className={`${styles.works__right} ${styles.right2}`}>
              <div className={`${styles.card__wrapper} ${styles.m2}`}>
                <div className={styles.card__title__wrapper}>
                  <div className={styles.cricle}>2</div>
                  <h4 className={styles.card__title}>Join the Interview</h4>
                </div>
                <p className={styles.card__text}>
                  Choose whether you want to practice as a respondent or as an interviewer. Pick a convenient time and
                  format.
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles.works__block} ${styles.block3}`}>
            <div className={`${styles.works__left} ${styles.left3}`}>
              <div className={`${styles.card__wrapper} ${styles.m3}`}>
                <div className={styles.card__title__wrapper}>
                  <div className={styles.cricle}>3</div>
                  <h4 className={styles.card__title}>Receive Feedback</h4>
                </div>
                <p className={styles.card__text}>
                  Get detailed feedback to help you improve your soft and hard skills in your area of your
                  specialization.
                </p>
              </div>
            </div>
            <div className={`${styles.works__right} ${styles.right3}`}>
              <img alt='' className={styles.img4} src={img4} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default howItWorksSection;
