import PropTypes from 'prop-types';
import { ConvertMilliInYears } from '@utils/helpers/convertMilliInYears.js';

const TimeAgo = ({ data }) => {
  const utcCreationDate = new Date(data);
  const timezoneOffset = utcCreationDate.getTimezoneOffset();
  const localCreationDate = utcCreationDate.setMinutes(utcCreationDate.getMinutes() - timezoneOffset);
  const timeAgo = ConvertMilliInYears(Date.now() - localCreationDate);
  return <>{timeAgo}</>;
};

TimeAgo.propTypes = {
  data: PropTypes.string.isRequired,
};

export default TimeAgo;
