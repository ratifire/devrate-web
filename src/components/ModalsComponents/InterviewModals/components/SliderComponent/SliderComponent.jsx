import PropTypes from 'prop-types';
import TimeSlotInfo from '../TimeSlotInfo';
import ScheduleInterviewSlots from '../ScheduleInterviewSlotsComponent';

const SliderComponent = ({ formik, slide, mySpecialization }) => {
  const SliderElement =
    {
      1: TimeSlotInfo,
      3: ScheduleInterviewSlots,
    }[slide] ?? TimeSlotInfo;

  return <SliderElement formik={formik} mySpecialization={mySpecialization} />;
};

SliderComponent.propTypes = {
  formik: PropTypes.object.isRequired,
  slide: PropTypes.number.isRequired,
  mySpecialization: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      mainMasteryLevel: PropTypes.string.isRequired,
      mainMasteryId: PropTypes.number.isRequired,
      main: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default SliderComponent;
