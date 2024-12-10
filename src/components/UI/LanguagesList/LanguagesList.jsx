import PropTypes from 'prop-types';
import LanguageLevel from '../LanguageLevel';

const LanguagesList = ({ data }) => {
  return (
    <>
      {data?.map((item) => (
        <LanguageLevel key={item.name} language={item.name} level={item.level} />
      ))}
    </>
  );
};
LanguagesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
export default LanguagesList;
