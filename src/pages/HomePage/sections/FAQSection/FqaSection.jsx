import React, { useState } from 'react';
import styles from './Faq.module.scss';
import { faqData } from './faqData';
import iconBtn from '../../assets/icon-bottom.svg';
import iconOpen from '../../assets/icon-open-top.svg';

const FqaSection = () => {
  const [openId, setOpenId] = useState(null);

  const handleOnClick = (id) => {
    setOpenId(openId === id ? null : id);
  };


  const leftColumn = faqData.slice(0, 5);
  const rightColumn = faqData.slice(5);

  return (
    <section className={styles.faq}>
      <div className='container'>
        <h1 className={styles.faq__title}>FAQ</h1>
        <div className={styles.faq__menu}>
          <div className={styles.faq__items}>
            {leftColumn.map((item) => (
              <div className={styles.faq__itemsContent} key={item.id} onClick={() => handleOnClick(item.id)}>
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
          <div className={styles.faq__items}>
            {rightColumn.map((item) => (
              <div className={styles.faq__itemsContent} key={item.id} onClick={() => handleOnClick(item.id)}>
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
export default FqaSection;
