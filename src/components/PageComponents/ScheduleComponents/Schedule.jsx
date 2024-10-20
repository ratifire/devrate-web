import React, {useEffect, useRef, useState} from 'react';
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
import { useTheme } from '@mui/material/styles';
import CustomScrollContainer from "./CustomScrollContainer";
 

 const Schedule = () => {
  const theme = useTheme();
  const calendarRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState(DateTime.local());
  const [selectedWeek, setSelectedWeek] = useState(DateTime.local().weekNumber);
  const [event, setEvent] = useState([]);
  const [popup, setPopup] = useState({ visible: false, event: null, x: 100, y: 100 });
  const [popupPosition, setPopupPosition] = useState('TOPRIGHT');
  const [from, setFrom] = useState(DateTime.local().startOf('week').plus({ days: 1 }).toFormat('yyyy-MM-dd'));
  const [to, setTo] = useState(DateTime.local().startOf('week').toFormat('yyyy-MM-dd'));
  const fromTime = encodeURIComponent(`${DateTime.local().toFormat('yyyy-MM-dd')}T00:00:00+03:00`);
  // const specificDate = DateTime.fromISO('2024-09-23T00:00:00+03:00');
  // const fromTime = encodeURIComponent(`${specificDate.toFormat('yyyy-MM-dd')}T00:00:00+03:00`);
  
  const { id: userId } = useSelector((state) => state.auth.user.data);
  const [events, setEvents] = useState([]);
  const [eventStartTime, setEventStartTime] = useState(DateTime.now().toFormat('HH:mm:ss'));

  const { data: eventsForSelectedWeek, isLoading, isFetching } = useGetEventByUserIdQuery({ userId, from, to });
  const { data: currentClosestEvents, isLoading: loading } = useGetClosestEventByUserIdQuery({ userId, fromTime });
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
     }, [selectedWeek, eventStartTime, from, theme]);

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
     }, [eventsForSelectedWeek, isFetching, theme]);

  
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
       setEvent(eventsForSelectedWeek.find(event=>event.id.toString()===info.event._def.publicId));
      
       const dimensions = {popupWidth:413, arrowWidth:10, popupHeight: 200, rectWidth: 120, rectHeight:70}
       let xoffset = rect.left - (dimensions.popupWidth + dimensions.arrowWidth)
       let yoffset = getOffsetTopWithScroll(info.el)
       setPopupPosition('TOPRIGHT');
     if (rect.left < window.innerWidth / 2) {
         xoffset = rect.left + dimensions.rectWidth + (3* dimensions.arrowWidth);
         setPopupPosition('TOPLEFT');
        }
     if ((rect.left > window.innerWidth / 2 ) && ( rect.top > window.innerHeight / 2)) {
        yoffset = yoffset - dimensions.popupHeight
        setPopupPosition('BOTTOMRIGHT');
        }
     if (rect.left < window.innerWidth / 2 && ( rect.top > window.innerHeight / 2)) {
         yoffset = yoffset - dimensions.popupHeight
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
  
  if (isLoading || loading) {
    return <div>Loading...</div>;
  }
  return (
    <Box sx={styles.demoApp}>
      <Sidebar currentEvents={currentClosestEvents} selectedDate={selectedDate} handleDateChange={handleDateChange} />
      <CustomScrollContainer sx={styles.demoAppMain}>
        {<FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={false}
            initialView='timeGridWeek'
            firstDay={1}
            slotDuration='01:00:00'
            slotLabelInterval={{hours: 1}}
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
        />}
        {popup.visible && event && (
          <EventPopup popup={popup} event={event} handleClosePopup={handleClosePopup} popupPosition={popupPosition} />
        )}
      </CustomScrollContainer>
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
                overflowY: 'scroll',
                scrollbarWidth: 'thin',
                scrollbarColor: `${theme.palette.neutral['600']} ${theme.palette.common.white}`,
            });

            fcScroller.style['--webkit-scrollbar'] = '10px';
            fcScroller.style['--webkit-scrollbar-track'] = `background: ${theme.palette.neutral['600']}`;
            fcScroller.style['--webkit-scrollbar-thumb'] = `background-color: ${theme.palette.common.white}`;
            fcScroller.style['--webkit-scrollbar-thumb'] = 'border-radius: 10px';
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
            Object.assign(el.style, theme.palette.mode === "dark" ? styles.timeGridTableDataDark : styles.timeGridTableDataLight);
        });
        timeGridTodayElements.forEach((el) => {
            Object.assign(el.style, styles.timeGridTodayElements);
        });
        timeGridHeadElements.forEach((el) => {
            Object.assign(el.style, theme.palette.mode === "dark" ? styles.timeGridTableHeadDark : styles.timeGridTableHeadLight);
        });
        timeGridEventElements.forEach((el) => {
            Object.assign(el.style, styles.timeGridEventElements);
        });
    }
};


export default Schedule;
