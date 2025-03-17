import { Tab, Tabs } from '@mui/material';
import { DateTime } from 'luxon';
import PropTypes from 'prop-types';
import { styles } from './styles.js';

const RenderTabs = ({ weekDates, onChange, tab }) => {
  const handleTabChange = (event, newTab) => {
    onChange(newTab); // Pass both the event and the new tab value
  };

  return (
    <Tabs sx={styles.tabsRow} value={tab} onChange={handleTabChange}>
      {weekDates.map((day) => {
        const label = day.toFormat('EEE, d');
        const isPastDate = DateTime.now().startOf('day') > day;

        return <Tab key={label} disabled={isPastDate} label={label} sx={styles.tab} value={label} />;
      })}
    </Tabs>
  );
};

RenderTabs.propTypes = {
  weekDates: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  tab: PropTypes.string.isRequired,
};

export default RenderTabs;
