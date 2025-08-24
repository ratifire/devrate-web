import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import mascot1 from '../../../assets/aboutUsMascot/mascot1.svg';
import mascot2 from '../../../assets/aboutUsMascot/mascot2.svg';
import mascot3 from '../../../assets/aboutUsMascot/mascot3.svg';
import styles from '../HowItWorksSection.module.scss';
import './HowItWorksSwiper.css';

const HowItWorksSwiper = () => {
  return (
    <Swiper
      autoHeight
      centeredSlides
      navigation
      modules={[Pagination]}
      pagination={{
        clickable: true,
        // dynamicBullets: true,
      }}
      scrollbar={{ draggable: true }}
      slidesPerView={'auto'}
      spaceBetween={16}
    >
      <SwiperSlide className={`${styles.card__wrapper} ${styles.m1}`}>
        {({ isActive }) => (
          <div className={isActive ? `${styles.card} ${styles.cardActive}` : styles.card}>
            <div className={styles.card__title__wrapper}>
              <div className={styles.cricle}>1</div>
              <h3 className={styles.card__title}>Register your profile</h3>
            </div>
            <div className={isActive ? `${styles.mascot} ${styles.mascotActive}` : styles.mascot}>
              <img alt='mascot' src={mascot1} />
            </div>
            <p className={styles.card__text}>
              Create your profile and fill in infomation about your work experience, soft and hard skills.
            </p>
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide className={`${styles.card__wrapper} ${styles.m2}`}>
        {({ isActive }) => (
          <div className={isActive ? `${styles.card} ${styles.cardActive}` : styles.card}>
            <div className={styles.card__title__wrapper}>
              <div className={styles.cricle}>2</div>
              <h3 className={styles.card__title}>Join the Interview</h3>
            </div>
            <div className={isActive ? `${styles.mascot} ${styles.mascotActive}` : styles.mascot}>
              <img alt='mascot' src={mascot2} />
            </div>
            <p className={styles.card__text}>
              Select format: as a candidate or as an interviewer. Pick a time and comfortable format.
            </p>
          </div>
        )}
      </SwiperSlide>
      <SwiperSlide className={`${styles.card__wrapper} ${styles.m3}`}>
        {({ isActive }) => (
          <div className={isActive ? `${styles.card} ${styles.cardActive}` : styles.card}>
            <div className={styles.card__title__wrapper}>
              <div className={styles.cricle}>3</div>
              <h3 className={styles.card__title}>Receive Feedback</h3>
            </div>
            <div className={isActive ? `${styles.mascot} ${styles.mascotActive}` : styles.mascot}>
              <img alt='mascot' src={mascot3} />
            </div>
            <p className={styles.card__text}>
              Get feedback to help you improve your soft and hard skills in your area of specialization.
            </p>
          </div>
        )}
      </SwiperSlide>

      {/*<div className={styles.swiperPagination}>*/}
      {/*  <span className='swiper-pagination-bullet' />*/}
      {/*</div>*/}
    </Swiper>
  );
};
HowItWorksSwiper.displayName = 'HowItWorksSwiper';

export default HowItWorksSwiper;
