import PropTypes from 'prop-types';

const ScheduleTemplate = ({ children }) => {
  return <div className='schedule'>{children}</div>;
};

ScheduleTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScheduleTemplate;
