import React, { useEffect, useRef, useState } from 'react';
import Sidebar from './Sidebar';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { styles } from './Schedule.styles';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import {
  useGetClosestEventByUserIdQuery,
  useGetEventByUserIdQuery,
  useLazyGetEventByUserIdQuery,
} from '../../../redux/schedule/scheduleApiSlice';
import { DateTime } from 'luxon';
import EventPopup from './EventPopup';

const Schedule = () => {
  const calendarRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(DateTime.local());
  const [selectedWeek, setSelectedWeek] = useState(DateTime.local().weekNumber);
  const [event, setEvent] = useState([]);
  const [popup, setPopup] = useState({ visible: false, event: null, x: 100, y: 100 });
  const [popupPosition, setPopupPosition] = useState('TOPRIGHT');
  const [from, setFrom] = useState(DateTime.local().startOf('week').plus({ days: 1 }).toFormat('yyyy-MM-dd'));
  const [to, setTo] = useState(DateTime.local().startOf('week').toFormat('yyyy-MM-dd'));
  const [fromTime, setFromTime] = useState(
    encodeURIComponent(`${DateTime.local().toFormat('yyyy-MM-dd')}T00:00:00+03:00`)
  );
  const { id: userId } = useSelector((state) => state.auth.user.data);
  const [events, setEvents] = useState([]);
  const [eventStartTime, setEventStartTime] = useState(DateTime.now().toFormat('HH:mm:ss'));
  console.log(eventStartTime, `eventStartTime`);

  const { data: currentEvents, isLoading, isFetching } = useGetEventByUserIdQuery({ userId, from, to });
  const { data: currentClosestEvents, isLoading: loading } = useGetClosestEventByUserIdQuery({ userId, fromTime });
  const [triggerEvents] = useLazyGetEventByUserIdQuery();

  useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      applyRequiredStyles(calendarApi);
      calendarApi.gotoDate(from);
      calendarApi.scrollToTime(eventStartTime);
    }
  }, [selectedWeek, eventStartTime]);

  useEffect(() => {
    setEvents(transformEvents(currentEvents || []));
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();

      applyRequiredStyles(calendarApi);
    }
  }, [isFetching]);

  const findEventTimeForChosenDay = (newDate, resp) => {
    const luxonDate = DateTime.fromISO(newDate);

    if (!luxonDate.isValid) {
      return;
    }

    const targetDay = luxonDate.day;
    const targetMonth = luxonDate.month;
    const targetYear = luxonDate.year;

    const matchingEvents = resp.filter((event) => {
      const eventDate = DateTime.fromISO(event.startTime);
      const eventDay = eventDate.day;
      const eventMonth = eventDate.month;
      const eventYear = eventDate.year;
      return eventDay === targetDay && eventMonth === targetMonth && eventYear === targetYear;
    });

    if (matchingEvents.length === 0) {
      return DateTime.now().toFormat('HH:mm:ss');
    }

    const startTime = DateTime.fromISO(matchingEvents[0].startTime).toLocal();
    const adjustedTime = startTime.minus({ hours: 1 });

    return adjustedTime.toFormat('HH:mm:ss');
  };

  const handleDateChange = async (newDate) => {
    setSelectedDate(newDate);
    const weekNumber = DateTime.fromJSDate(newDate.toJSDate()).weekNumber;
    setSelectedWeek(weekNumber);

    const chosenDay = DateTime.fromISO(newDate);
    const year = chosenDay.year;

    const { startOfWeek, endOfWeek } = getWeekStartAndEnd(year, weekNumber);
    setFrom(startOfWeek);
    setTo(endOfWeek);
    setFromTime(encodeURIComponent(`${startOfWeek}T00:00:00+03:00`));

    const { data: resp } = await triggerEvents({ userId, from: startOfWeek, to: endOfWeek });
    const startTime = findEventTimeForChosenDay(newDate, resp);
    setEventStartTime(startTime);
  };
  function getOffsetTopWithScroll(element) {
    let offsetTop = 0;
    let currentElement = element;
    while (currentElement) {
      offsetTop += currentElement.offsetTop;
      if (currentElement.offsetParent && currentElement.offsetParent.scrollTop) {
        offsetTop -= currentElement.offsetParent.scrollTop;
      }
      currentElement = currentElement.offsetParent;
    }
    return offsetTop;
  }
  const handleEventClick = (info) => {
    if (info) {
      if (calendarRef.current) {
        const calendarApi = calendarRef.current.getApi();
        const scroller = calendarApi.el.querySelector('.fc-scroller-liquid-absolute');
        if (scroller) {
          scroller.style.overflow = 'hidden';
        }
      }
      const rect = info.el.getBoundingClientRect();
      let x
      let y
      setEvent(currentClosestEvents[0]);
      const dimentions = {popupWidth:413, arrowWidth:10, popupHeight: 200, rectWidth: 120, rectHeight:70}
      const xoffset = rect.left - (dimentions.popupWidth + dimentions.arrowWidth)
      const yoffset = getOffsetTopWithScroll(info.el)
      
      x = xoffset
      y = yoffset
      setPopupPosition('TOPRIGHT');
      
      // if (rect.left > window.innerWidth / 2) {
      //   // x = rect.left - 450;
      //   x = rect.left - window.innerWidth / 5;
      // }
      // if (rect.left < window.innerWidth / 2) {
      //   // x = rect.left + 120;
      //   x = rect.left + window.innerWidth / 18.5;
      // }
      // if (rect.top < 400) {
      //   y = rect.top + 130;
      // }
      // if (rect.top > window.innerHeight - 200) {
      //   y = rect.top - 140;
      // }
      // if (rect.left > window.innerWidth / 2 && window.innerHeight - 200) {
      //   setPopupPosition('BOTTOMRIGHT');
      // }
      // if (rect.left > window.innerWidth / 2 && rect.top < 400) {
      //   setPopupPosition('TOPRIGHT');
      // }
      // if (rect.left < window.innerWidth / 2 && window.innerHeight - 200) {
      //   setPopupPosition('BOTTOMLEFT');
      // }
      // if (rect.left < window.innerWidth / 2 && rect.top < 400) {
      //   setPopupPosition('TOPLEFT');
      // }

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
    const calendarApi = calendarRef.current.getApi();
    const scroller = calendarApi.el.querySelector('.fc-scroller-liquid-absolute');
    scroller.style.overflow = 'auto';
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

const transformEvents = (events) => {
  return events.map((event) => ({
    id: event.id,
    title: event.type,
    start: event.startTime,
    backgroundColor: event.type === 'INTERVIEW' ? '#DAFE22' : '#FCA728',
    textColor: '#1D1D1D',
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

export default Schedule;
