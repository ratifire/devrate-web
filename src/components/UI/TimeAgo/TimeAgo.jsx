import PropTypes from 'prop-types';
import { ConvertMilliInYears } from '../../../utils/helpers/convertMilliInYears.js';

const TimeAgo = ({ data }) => {
  const localTime = new Date(data);
  const timeAgo = ConvertMilliInYears(Date.now() - localTime);

  return <>{timeAgo}</>;
};

TimeAgo.propTypes = {
  data: PropTypes.string.isRequired,
};

export default TimeAgo;
