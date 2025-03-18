import { useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Box } from '@mui/material';
import { DateTime } from 'luxon';
import { useTheme } from '@mui/material/styles';
import { useGetEventByUserIdQuery, useLazyGetEventByUserIdQuery } from '@redux/api/slices/schedule/scheduleApiSlice';
import { ScheduleSkeleton } from '@components/UI/Skeleton';
import EventPopup from './EventPopup';
import { styles } from './Schedule.styles';
import Sidebar from './Sidebar';

const Schedule = () => {
  const theme = useTheme();
  const calendarRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(DateTime.local());
  const [selectedWeek, setSelectedWeek] = useState(DateTime.local().weekNumber);
  const [event, setEvent] = useState([]);
  const [popup, setPopup] = useState({ visible: false, event: null, x: 100, y: 100 });
  const [popupPosition, setPopupPosition] = useState('TOPRIGHT');
  const [eventUpdated, setEventUpdated] = useState(false);
  const [from, setFrom] = useState(DateTime.local().startOf('week').toFormat('yyyy-MM-dd'));
  const [to, setTo] = useState(DateTime.local().startOf('week').plus({ days: 6 }).toFormat('yyyy-MM-dd'));
  const [events, setEvents] = useState([]);
  const [eventStartTime, setEventStartTime] = useState(DateTime.now().toFormat('HH:mm:ss'));

  const { data: eventsForSelectedWeek, isFetching: isFetchingGetEvent } = useGetEventByUserIdQuery({ from, to });
  const [triggerEvents] = useLazyGetEventByUserIdQuery();

  useEffect(() => {
    const waitForCalendarRef = () => {
      if (calendarRef.current) {
        const calendarApi = calendarRef.current.getApi();
        applyRequiredStyles(calendarApi, theme);
        calendarApi.gotoDate(from);
        calendarApi.scrollToTime(eventStartTime);
      } else {
        requestAnimationFrame(waitForCalendarRef);
      }
    };

    waitForCalendarRef();
  }, [selectedWeek, eventStartTime, from, theme, eventUpdated]);

  useEffect(() => {
    setEvents(transformEvents(eventsForSelectedWeek || []));

    const waitForCalendarRef = () => {
      if (calendarRef.current) {
        const calendarApi = calendarRef.current.getApi();
        applyRequiredStyles(calendarApi, theme);
      } else {
        requestAnimationFrame(waitForCalendarRef);
      }
    };

    waitForCalendarRef();
  }, [eventsForSelectedWeek, isFetchingGetEvent, theme, eventUpdated]);

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
    handleClosePopup();
    setSelectedDate(newDate);
    const weekNumber = DateTime.fromJSDate(newDate.toJSDate()).weekNumber;
    setSelectedWeek(weekNumber);

    const chosenDay = DateTime.fromISO(newDate);
    const year = chosenDay.year;

    const { startOfWeek, endOfWeek } = getWeekStartAndEnd(year, weekNumber);
    setFrom(startOfWeek);
    setTo(endOfWeek);

    const { data: resp } = await triggerEvents({ from: startOfWeek, to: endOfWeek });
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
      setEvent(eventsForSelectedWeek.find((event) => event.id.toString() === info.event._def.publicId));

      const dimensions = { popupWidth: 413, arrowWidth: 10, popupHeight: 200, rectWidth: 120, rectHeight: 70 };
      let xoffset = rect.left - (dimensions.popupWidth + dimensions.arrowWidth);
      let yoffset = getOffsetTopWithScroll(info.el);
      setPopupPosition('TOPRIGHT');
      if (rect.left < window.innerWidth / 2) {
        xoffset = rect.left + dimensions.rectWidth + 3 * dimensions.arrowWidth;
        setPopupPosition('TOPLEFT');
      }
      if (rect.left > window.innerWidth / 2 && rect.top > window.innerHeight / 2) {
        yoffset = yoffset - dimensions.popupHeight;
        setPopupPosition('BOTTOMRIGHT');
      }
      if (rect.left < window.innerWidth / 2 && rect.top > window.innerHeight / 2) {
        yoffset = yoffset - dimensions.popupHeight;
        setPopupPosition('BOTTOMLEFT');
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
        x: xoffset,
        y: yoffset,
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

  const transformEvents = (events) => {
    return events.map((event) => ({
      id: event.id,
      title: event.type,
      start: event.startTime,
      backgroundColor: event.type === 'INTERVIEW' ? theme.palette.info.lime : theme.palette.info.orange,
      textColor: '#1D1D1D',
    }));
  };

  if (isFetchingGetEvent) {
    return <ScheduleSkeleton />;
  }

  return (
    <Box sx={styles.demoApp}>
      <Sidebar handleDateChange={handleDateChange} selectedDate={selectedDate} setEventUpdated={setEventUpdated} />
      <Box sx={styles.demoAppMain}>
        {
          <FullCalendar
            ref={calendarRef}
            dayMaxEvents
            expandRows
            selectMirror
            weekends
            allDaySlot={false}
            dayHeaderFormat={{
              weekday: 'short',
            }}
            displayEventTime={false}
            editable={false}
            eventClick={handleEventClick}
            events={events}
            firstDay={1}
            headerToolbar={false}
            initialView='timeGridWeek'
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            selectable={false}
            slotDuration='01:00:00'
            slotLabelFormat={[
              {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
              },
            ]}
            slotLabelInterval={{ hours: 1 }}
          />
        }
        {popup.visible && event && (
          <EventPopup event={event} handleClosePopup={handleClosePopup} popup={popup} popupPosition={popupPosition} />
        )}
      </Box>
    </Box>
  );
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

const applyRequiredStyles = (calendarApi, theme) => {
  if (calendarApi) {
    const fcScroller = calendarApi.el.querySelector('.fc-scroller-liquid-absolute');
    if (fcScroller) {
      Object.assign(fcScroller.style, {
        '::-webkit-scrollbar': '10px',
        '::-webkit-scrollbar-track': `background: ${theme.palette.scroll.scrollWrapp.backgroundColor}`,
        '::-webkit-scrollbar-thumb': `background-color: ${theme.palette.scroll.scrollEl.backgroundColor}; border-radius: 10px`,
      });
    }

    const fcHeaderScroller = calendarApi.el.querySelector('.fc-scroller');
    if (fcHeaderScroller) {
      fcHeaderScroller.style.overflow = 'hidden';
    }
    const timeGridSlotElements = calendarApi.el.querySelectorAll('.fc-theme-standard td');
    const timeGridTodayElements = calendarApi.el.querySelectorAll('.fc .fc-timegrid-col.fc-day-today');
    const timeGridHeadElements = calendarApi.el.querySelectorAll(
      '.fc-theme-standard th, .fc-theme-standard .fc-scrollgrid'
    );
    const timeGridEventElements = calendarApi.el.querySelectorAll(
      '.fc-timegrid-event-harness-inset .fc-timegrid-event'
    );

    timeGridSlotElements.forEach((el) => {
      Object.assign(
        el.style,
        theme.palette.mode === 'dark' ? styles.timeGridTableDataDark : styles.timeGridTableDataLight
      );
    });
    timeGridTodayElements.forEach((el) => {
      Object.assign(el.style, styles.timeGridTodayElements);
    });
    timeGridHeadElements.forEach((el) => {
      Object.assign(
        el.style,
        theme.palette.mode === 'dark' ? styles.timeGridTableHeadDark : styles.timeGridTableHeadLight
      );
    });
    timeGridEventElements.forEach((el) => {
      Object.assign(el.style, styles.timeGridEventElements);
    });
  }
};

export default Schedule;
