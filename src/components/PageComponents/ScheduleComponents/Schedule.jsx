import React, { useEffect, useRef, useState } from 'react';
import Sidebar from './Sidebar';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { styles } from './Schedule.styles';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetClosestEventByUserIdQuery, useGetEventByUserIdQuery } from '../../../redux/schedule/scheduleApiSlice';
import { DateTime } from 'luxon';

const transformEvents = (events) => {
  return events.map((event) => ({
    id: event.id,
    title: event.type,
    start: event.startTime,
  }));
};

const Schedule = () => {
  const calendarRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(DateTime.local());
  const [selectedWeek, setSelectedWeek] = useState(DateTime.local().weekNumber);

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [fromTime, setFromTime] = useState('');
  const [isReady, setIsReady] = useState(false);
  const { id: userId } = useSelector((state) => state.auth.user.data);

  const getWeekStartAndEnd = (year, weekNumber) => {
    const firstDayOfYear = DateTime.local(year).startOf('year');
    const firstDayOfWeek = firstDayOfYear.plus({ weeks: weekNumber - 1 }).startOf('week');
    const lastDayOfWeek = firstDayOfWeek.endOf('week');

    return {
      startOfWeek: firstDayOfWeek.toISODate(),
      endOfWeek: lastDayOfWeek.toISODate(),
    };
  };

  useEffect(() => {
    if (selectedWeek !== null && calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      const { startOfWeek } = getWeekStartAndEnd(2024, selectedWeek);
      calendarApi.gotoDate(startOfWeek);
    }
  }, [selectedWeek]);

  useEffect(() => {
    if (selectedWeek !== null) {
      const { startOfWeek, endOfWeek } = getWeekStartAndEnd(2024, selectedWeek);
      setFrom(startOfWeek);
      setTo(endOfWeek);
      setFromTime(encodeURIComponent(selectedDate.setZone('UTC+03:00').toISO()));
      setIsReady(true);
    }
  }, [selectedWeek]);

  const { data: currentEvents, isLoading } = useGetEventByUserIdQuery({ userId, from, to }, { skip: !isReady });
  const { data: currentClosestEvents, isLoading: loading } = useGetClosestEventByUserIdQuery(
    { userId, fromTime },
    { skip: !isReady }
  );

  useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      const timeGridSlotElements = calendarApi.el.querySelectorAll('.fc-theme-standard td');
      const timeGridTodayElements = calendarApi.el.querySelectorAll('.fc .fc-timegrid-col.fc-day-today');
      const timeGridHeadElements = calendarApi.el.querySelectorAll(
        '.fc-theme-standard th, .fc-theme-standard .fc-scrollgrid'
      );
      const timeGridEventElements = calendarApi.el.querySelectorAll('.fc-v-event .fc-event-main');

      timeGridSlotElements.forEach((el) => {
        Object.assign(el.style, styles.timeGridTableData);
      });
      timeGridTodayElements.forEach((el) => {
        Object.assign(el.style, styles.timeGridTodayElements);
      });
      timeGridHeadElements.forEach((el) => {
        Object.assign(el.style, styles.timeGridTableHead);
      });
      timeGridEventElements.forEach((el) => {
        Object.assign(el.style, styles.timeGridEventElements);
      });

      const styleElement = document.createElement('style');
      styleElement.textContent = `
        :root {
          --fc-border-color: #303032 !important; /* Set the border color explicitly */
        }
      `;
      document.head.appendChild(styleElement);
    }
  });

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    const weekNumber = DateTime.fromJSDate(newDate.toJSDate()).weekNumber;
    setSelectedWeek(weekNumber);
  };

  if (isLoading || loading) {
    return <div>Loading...</div>;
  }

  const transformedEvents = transformEvents(currentEvents || []);

  return (
    <Box sx={styles.demoApp}>
      <Sidebar currentEvents={currentClosestEvents} selectedDate={selectedDate} handleDateChange={handleDateChange} />
      <Box sx={styles.demoAppMain}>
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={false}
          initialView='timeGridWeek'
          firstDay={1}
          slotDuration='01:00:00'
          slotLabelInterval={{ hours: 1 }}
          allDaySlot={false}
          expandRows={true}
          editable={false}
          selectable={false}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          events={transformedEvents}
          dayHeaderFormat={{
            weekday: 'short',
          }}
          slotLabelFormat={[
            {
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
            },
          ]}
          slotMinTime={'07:00:00'}
          slotMaxTime={'31:00:00'}
          // select={handleDateSelect}
          // eventContent={renderEventContent} // custom render function
          // eventClick={handleEventClick}
          // eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          // dayHeaderFormat={{ weekday: 'short' }}
          /* you can update a remote database when these fire:
          eventAdd={function(){}}
          eventChange={function(){}}
          eventRemove={function(){}}
          */
        />
      </Box>
    </Box>
  );
};

export default Schedule;
