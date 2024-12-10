import styles from './AboutUsSection.module.scss';

const AboutUsSection = () => {
  return (
    <section className={styles.about__bg} id='about'>
      <div className={styles.about}>
        <div className='container'>
          <h2 className={styles.heading}>
            About <span className={styles.highlight}>Us</span>
          </h2>
          <div className={styles.gridContainer}>
            <div className={`${styles.card} ${styles.topLeft}`}>
              <h3 className={styles.topLeft}>Real Experience</h3>
              <p>
                We provide a realistic environment for technical interviews, helping you prepare for challenging tasks
                and questions.
              </p>
            </div>
            <div className={`${styles.card} ${styles.topRight}`}>
              <h3 className={styles.topRight}>Community of Peers</h3>
              <p>Engage with other developers who are ready to share their knowledge and help.</p>
            </div>
            <div className={`${styles.card} ${styles.botLeft}`}>
              <h3 className={styles.botLeft}>Beginner-Friendly</h3>
              <p>Practice in a space where mistakes are part of the learning process, not failures.</p>
            </div>
            <div className={`${styles.card} ${styles.botRight}`}>
              <h3 className={styles.botRight}>Detailed Feedback</h3>
              <p>
                You’ll receive a detailed analysis of your answers to help you prepare more effectively for real
                technical interviews.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
