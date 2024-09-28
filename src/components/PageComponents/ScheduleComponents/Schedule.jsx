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
import EventPopup from './EventPopup';

const Schedule = () => {
  const calendarRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(DateTime.local());
  const [selectedWeek, setSelectedWeek] = useState(DateTime.local().weekNumber);
  const [event, setEvent] = useState([]);
  const [popup, setPopup] = useState({ visible: false, event: null, x: 100, y: 100 });
  const [popupPosition, setPopupPosition] = useState('TOPRIGHT');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [fromTime, setFromTime] = useState('');
  const [isReady, setIsReady] = useState(false);
  const { id: userId } = useSelector((state) => state.auth.user.data);
  const [events, setEvents] = useState([]);
  const [eventStartTime, setEventStartTime] = useState(null);

  const { data: currentEvents, isLoading } = useGetEventByUserIdQuery({ userId, from, to }, { skip: !isReady });
  const { data: currentClosestEvents, isLoading: loading } = useGetClosestEventByUserIdQuery(
    { userId, fromTime },
    { skip: !isReady }
  );

  const transformEvents = (events) => {
    return events.map((event) => ({
      id: event.id,
      title: event.type,
      start: event.startTime,
      backgroundColor: event.type === 'INTERVIEW' ? '#16FFB966' : '#FCA728',
    }));
  };

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
      const { startOfWeek, endOfWeek } = getWeekStartAndEnd(2024, selectedWeek);
      setFrom(startOfWeek);
      setTo(endOfWeek);
      setFromTime(encodeURIComponent(`${startOfWeek}T07:00:00+03:00`));
      setIsReady(true);

      const calendarApi = calendarRef.current.getApi();
      calendarApi.gotoDate(startOfWeek);

      applyRequiredStyles(calendarApi);
    }
  }, [selectedWeek]);

  useEffect(() => {
    const calendarApi = calendarRef.current.getApi();
    if (eventStartTime) {
      calendarApi.scrollToTime(eventStartTime);
    }
    // } else {
    //   const now = DateTime.now().toFormat('HH:mm:00');
    //   calendarApi.scrollToTime(now);
    // }
  }, [selectedDate]);

  useEffect(() => {
    setEvents(transformEvents(currentEvents || []));
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();

      applyRequiredStyles(calendarApi);
    }
  }, [currentEvents]);

  const applyRequiredStyles = (calendarApi) => {
    if (calendarApi) {
      const timeGridSlotElements = calendarApi.el.querySelectorAll('.fc-theme-standard td');
      const timeGridTodayElements = calendarApi.el.querySelectorAll('.fc .fc-timegrid-col.fc-day-today');
      const timeGridHeadElements = calendarApi.el.querySelectorAll(
        '.fc-theme-standard th, .fc-theme-standard .fc-scrollgrid'
      );
      const timeGridEventElements = calendarApi.el.querySelectorAll(
        '.fc-timegrid-event-harness-inset .fc-timegrid-event'
      );

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
    }
  };

  const findEventTimeForChosenDay = (newDate) => {
    const luxonDate = DateTime.fromISO(newDate);

    if (!luxonDate.isValid) {
      return;
    }

    const targetDay = luxonDate.day;
    const targetMonth = luxonDate.month;
    const targetYear = luxonDate.year;

    const matchingEvents = events.filter((event) => {
      const eventDate = DateTime.fromISO(event.start);
      const eventDay = eventDate.day;
      const eventMonth = eventDate.month;
      const eventYear = eventDate.year;

      return eventDay === targetDay && eventMonth === targetMonth && eventYear === targetYear;
    });

    if (matchingEvents.length === 0) {
      return null;
    }

    const startTime = DateTime.fromISO(matchingEvents[0].start).toLocal();
    const adjustedTime = startTime.minus({ hours: 1 });

    return adjustedTime.toFormat('HH:mm:ss');
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    const weekNumber = DateTime.fromJSDate(newDate.toJSDate()).weekNumber;
    setSelectedWeek(weekNumber);
    const startTime = findEventTimeForChosenDay(newDate);
    setEventStartTime(startTime);
  };

  const handleEventClick = (info) => {
    if (info) {
      if (calendarRef.current) {
        const calendarApi = calendarRef.current.getApi();
        const scroller = calendarApi.el.querySelector('.fc-scroller-liquid-absolute');
        console.log(scroller);
        if (popup.visible) {
          if (scroller) {
            scroller.style.overflow = 'hidden';
          }
        } else {
          if (scroller) {
            scroller.style.overflow = 'auto';
          }
        }
      }
      const rect = info.el.getBoundingClientRect();
      let x = rect.left + 120;
      let y = rect.top - 140;
      setEvent(currentClosestEvents[0]);
      if (rect.left > window.innerWidth / 2) {
        x = rect.left - 450;
      }
      if (rect.left < window.innerWidth / 2) {
        x = rect.left + 120;
      }
      if (rect.top < 400) {
        y = rect.top + 180;
      }
      if (rect.top > window.innerHeight - 200) {
        y = rect.top - 140;
      }

      if (rect.left > window.innerWidth / 2 && window.innerHeight - 200) {
        setPopupPosition('BOTTOMRIGHT');
      }
      if (rect.left > window.innerWidth / 2 && rect.top < 400) {
        setPopupPosition('TOPRIGHT');
      }
      if (rect.left < window.innerWidth / 2 && window.innerHeight - 200) {
        setPopupPosition('BOTTOMLEFT');
      }
      if (rect.left < window.innerWidth / 2 && rect.top < 400) {
        setPopupPosition('TOPLEFT');
      }

      const eventDetails = {
        title: info.event.title,
        start: info.event.start, // Event start date and time
        end: info.event.end, // Event end date and time
        extendedProps: info.event.extendedProps, // Custom event properties, if any
      };

      setPopup({
        visible: true,
        event: eventDetails,
        x: x,
        y: y,
      });
    }
  };

  const handleClosePopup = () => {
    setPopup({
      visible: false,
      event: null,
      x: 0,
      y: 0,
    });
  };

  if (isLoading || loading) {
    return <div>Loading...</div>;
  }

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
          displayEventTime={false}
          events={events}
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
          eventClick={handleEventClick}
        />
        {popup.visible && event && (
          <EventPopup popup={popup} event={event} handleClosePopup={handleClosePopup} popupPosition={popupPosition} />
        )}
      </Box>
    </Box>
  );
};

export default Schedule;
