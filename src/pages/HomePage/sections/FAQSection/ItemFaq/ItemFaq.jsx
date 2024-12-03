import React from 'react';
import PropTypes from 'prop-types';
import iconBtn from '../../../assets/icon-bottom.svg';
import iconOpen from '../../../assets/icon-open-top.svg';
import styles from './ItemFaq.module.scss';

const ItemFaq = ({ item, openId, handleOnClick }) => {
  return (
    <div className={styles.itemFaq} onClick={() => handleOnClick(item.id)}>
      <div className={styles.itemFaq__header}>
        <img alt='iconButton' className={styles.itemFaq__iconBottom} src={openId === item.id ? iconOpen : iconBtn} />
        <div className={styles.itemFaq__question}>
          <span className={styles.itemFaq__number}>{item.id}</span>
          {item.question}
        </div>
        {openId === item.id && <div className={styles.itemFaq__answer}>{item.answer}</div>}
      </div>
    </div>
  );
};

ItemFaq.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  openId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleOnClick: PropTypes.func.isRequired,
};

ItemFaq.defaultProps = {
  openId: null,
};

export default ItemFaq;
