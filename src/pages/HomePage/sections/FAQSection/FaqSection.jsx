import React, { useState } from 'react';
import styles from './Faq.module.scss';
import { faqData } from './faqData';
import iconBtn from '../../assets/icon-bottom.svg';
import iconOpen from '../../assets/icon-open-top.svg';

const FaqSection = () => {
  const [openId, setOpenId] = useState(null);

  const handleOnClick = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.faq__bg} id='faq'>
      <div className='container'>
        <div className={styles.faq}>
          <h2 className={styles.faq__title}>FAQ</h2>
          <div className={styles.faq__menu}>
            {faqData.map((item) => (
              <div className={styles.faq__item} key={item.id} onClick={() => handleOnClick(item.id)}>
                <div className={styles.faq__header}>
                  <img
                    className={styles.faq__iconBottom}
                    src={openId === item.id ? iconOpen : iconBtn}
                    alt='iconButton'
                  />
                  <div className={styles.faq__question}>
                    <span className={styles.faq__number}>{item.id}</span>
                    {item.question}
                  </div>
                  {openId === item.id && <div className={styles.faq__answer}>{item.answer}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default FaqSection;
