import { datesConfig } from '../constants/datesConfig.js';

const fillEndYear = (formHandler, yearsArray) => {
  if (!formHandler.values.endYear) {
    const currentYear = new Date().getFullYear();

    const calculatedYear = !formHandler.values.startYear
      ? currentYear.toString()
      : (+formHandler.values.startYear + datesConfig.AVERAGE_EDUCATION_PERIOD).toString();

    if (yearsArray.includes(calculatedYear)) {
      formHandler.setFieldValue('endYear', calculatedYear);
    }
  }
};

export default fillEndYear;
