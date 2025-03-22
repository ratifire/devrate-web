import { useState } from 'react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Faq.module.scss';
import { faqData } from './faqData';
import { faqDataUkr } from './faqDataUkr.js';

import ItemFaq from './ItemFaq';

const FaqSection = memo(() => {
  const [openId, setOpenId] = useState(null);
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const localisationDataToBeDisplayed = currentLanguage === 'uk' ? faqDataUkr : faqData;
  const handleOnClick = (id) => {
    const scrollOffset = window.scrollY;
    setOpenId(openId === id ? null : id);

    setTimeout(() => {
      window.scrollTo({ top: scrollOffset });
    }, 0);
  };

  return (
    <section className={styles.faq__bg} id='faq'>
      <div className='container'>
        <div className={styles.faq}>
          <h2 className={styles.faq__title}>FAQ</h2>
          <div className={styles.faq__columns}>
            <div className={styles.faq__column}>
              {localisationDataToBeDisplayed.slice(0, 5).map((item) => (
                <ItemFaq key={item.id} handleOnClick={handleOnClick} item={item} openId={openId} />
              ))}
            </div>
            <div className={styles.faq__column}>
              {localisationDataToBeDisplayed.slice(5, 10).map((item) => (
                <ItemFaq key={item.id} handleOnClick={handleOnClick} item={item} openId={openId} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

FaqSection.displayName = 'FaqSection';

export default FaqSection;
