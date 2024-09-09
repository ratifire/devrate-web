import React, { useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { styles } from './Schedule.styles';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetClosestEventByUserIdQuery, useGetEventByUserIdQuery } from '../../../redux/schedule/scheduleApiSlice';

const transformEvents = (events) => {
  return events.map((event) => ({
    id: event.id,
    title: event.type,
    start: event.startTime,
  }));
};

export default function Schedule() {
  const calendarRef = useRef(null);

  const from = '2024-09-02';
  const to = '2024-10-02';
  const fromTime = '2024-07-02T06:00:00-03:00';
  const { id: userId } = useSelector((state) => state.auth.user.data);
  const { data: currentEvents, isLoading } = useGetEventByUserIdQuery({ userId, from, to });
  const { data: currentClosestEvents, isLoading: loading } = useGetClosestEventByUserIdQuery({ userId, fromTime });
  console.log('currentClosestEvents', currentEvents);

  useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      const timeGridSlotElements = calendarApi.el.querySelectorAll('.fc-theme-standard td');
      const timeGridTodayElements = calendarApi.el.querySelectorAll('.fc .fc-timegrid-col.fc-day-today');
      const timeGridHeadElements = calendarApi.el.querySelectorAll(
        '.fc-theme-standard th, .fc-theme-standard .fc-scrollgrid'
      );
      const timeGridEventElements = calendarApi.el.querySelectorAll('.fc-v-event .fc-event-main');

      // const toolBarElements = calendarApi.el.querySelectorAll('.fc .fc-header-toolbar'); //needed to hide toolbar

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

      //needed to hide toolbar
      // toolBarElements.forEach((el) => {
      //   Object.assign(el.style, styles.toolBarElements);
      // });
    }
  });

  if (isLoading || loading) {
    return <div>Loading...</div>;
  }

  const transformedEvents = transformEvents(currentEvents || []);

  return (
    <Box sx={styles.demoApp}>
      <Sidebar currentEvents={currentClosestEvents} />
      <Box sx={styles.demoAppMain}>
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: '',
            right: '',
          }}
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
}
