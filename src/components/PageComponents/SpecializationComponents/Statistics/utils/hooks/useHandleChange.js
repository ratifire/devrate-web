import { useState } from 'react';

const useHandleChange = ({ dataMonths, dataDays }) => {
  const [change, setChange] = useState('months');

  let selectedPeriod = change === 'months' ? dataMonths : dataDays;

  const handleChange = (event) => {
    if (event.target.value === 'months') {
      selectedPeriod = dataMonths;
      setChange('months');
    } else if (event.target.value === 'days') {
      selectedPeriod = dataDays;
      setChange('days');
    }
  };

  return {
    handleChange,
    selectedPeriod,
  };
};

export default useHandleChange;
