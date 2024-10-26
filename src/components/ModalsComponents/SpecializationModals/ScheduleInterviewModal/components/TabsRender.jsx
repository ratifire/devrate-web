import { Tab, Tabs } from '@mui/material';
import { styles } from './styles';
import { DateTime } from 'luxon';
import React from 'react';
import PropTypes from 'prop-types';

const RenderTabs = ({ weekDates,  onChange, tab}) => {
  const handleTabChange = (event, newTab) => {
    onChange(newTab); // Pass both the event and the new tab value
  };

  return(
  <Tabs sx={styles.tabsRow} value={tab} onChange={handleTabChange}>
    {weekDates.map((day) => {
      const label = day.toFormat('EEE, d');
      const isPastDate = DateTime.now().startOf('day') > day;

        return (
          <Tab
            disabled={isPastDate}
            key={label}
            label={label}
            value={label}
            sx={styles.tab}
          />
        );
      })}
    </Tabs>
  )
}

RenderTabs.propTypes = {
  weekDates: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  tab: PropTypes.string.isRequired
}

export default RenderTabs;
