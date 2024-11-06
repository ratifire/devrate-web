import React from 'react';
import styles from './Faq.module.scss';

const FqaSection = () => {
  return (
    <section className={styles.faq}>
      <div className='container'>
        <h1 className={styles.faq__title}>FAQ</h1>
        <div className={styles.faq__menu}>
          <div className={styles.faq__item}>
            <button className={styles.faq__header}>What is this platform for?</button>
            <div className={styles.faq__content}>
              Answer: Our platform is designed for a comprehensive assessment of technical interviews. Here, you'll
              engage with more experienced users in your field who will provide objective evaluations and constructive
              feedback. You will gain valuable practical experience and detailed statistics that will help you better
              understand your strengths and weaknesses, as well as prepare for real interviews.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FqaSection;
