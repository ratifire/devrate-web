import PropTypes from 'prop-types';
import { ConvertMilliInYears } from '../../../utils/helpers/convertMilliInYears.js';

const TimeAgo = ({ data }) => {
  const timeAgo = ConvertMilliInYears(Date.now() - new Date(data));

  return <>{timeAgo}</>;
};
TimeAgo.propTypes = {
  data: PropTypes.string.isRequired,
};
export default TimeAgo;
