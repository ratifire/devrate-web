import PropTypes from 'prop-types';
import React, { Suspense } from 'react';

const FaqTemplate = ({ children }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className='Faq'>{children}</div>
    </Suspense>
  );
};

FaqTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FaqTemplate;
