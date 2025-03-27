import { useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Box } from '@mui/material';
import { DateTime } from 'luxon';
import { useTheme } from '@mui/material/styles';
import { useGetEventByUserIdQuery } from '@redux/api/slices/schedule/scheduleApiSlice';
import { PopupPosition } from '@components/PageComponents/ScheduleComponents/constants';
import {
  findEventTimeForChosenDay,
  getOffsetTopWithScroll,
} from '@components/PageComponents/ScheduleComponents/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { setClosePopup, setOpenPopup } from '@redux/slices/schedule/scheduleSlice';
import EventPopup from '@components/PageComponents/ScheduleComponents/Calendar/EventPopup';
import { CalendarSkeleton } from '@components/UI/Skeleton';
import { ErrorComponent } from '@components/UI/Exceptions';
import { styles } from './Calendar.styles';

const Calendar = () => {
  const { popup, selectedDate, from, to } = useSelector((state) => state.schedule);
  const dispatch = useDispatch();
  const theme = useTheme();
  const calendarRef = useRef(null);
  const [event, setEvent] = useState([]);
  const [popupPosition, setPopupPosition] = useState(PopupPosition.TOP_RIGHT);
  const [events, setEvents] = useState([]);

  const {
    data: eventsForSelectedWeek,
    isFetching: isFetchingGetEvent,
    isError: isErrorGetEvent,
  } = useGetEventByUserIdQuery({ from, to });

  const restoreSelectedDate = DateTime.fromISO(selectedDate);

  const startTime = eventsForSelectedWeek
    ? findEventTimeForChosenDay(restoreSelectedDate, eventsForSelectedWeek)
    : DateTime.now().toFormat('HH:mm:ss');

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
  }, [eventsForSelectedWeek, isFetchingGetEvent, theme]);

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

      setPopupPosition(PopupPosition.TOP_RIGHT);

      if (rect.left < window.innerWidth / 2) {
        xoffset = rect.left + dimensions.rectWidth + 3 * dimensions.arrowWidth;
        setPopupPosition(PopupPosition.TOP_LEFT);
      }

      if (rect.left > window.innerWidth / 2 && rect.top > window.innerHeight / 2) {
        yoffset = yoffset - dimensions.popupHeight;
        setPopupPosition(PopupPosition.BOTTOM_RIGHT);
      }

      if (rect.left < window.innerWidth / 2 && rect.top > window.innerHeight / 2) {
        yoffset = yoffset - dimensions.popupHeight;
        setPopupPosition(PopupPosition.BOTTOM_LEFT);
      }

      dispatch(setOpenPopup({ title: info.event.title, x: xoffset, y: yoffset }));
    }
  };

  const handleClosePopup = () => {
    dispatch(setClosePopup());
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

  if (isErrorGetEvent) {
    return <ErrorComponent />;
  }

  if (isFetchingGetEvent) {
    return <CalendarSkeleton />;
  }

  if (calendarRef.current) {
    const calendarApi = calendarRef.current.getApi();
    applyRequiredStyles(calendarApi, theme);
    calendarApi.gotoDate(from);
    calendarApi.scrollToTime(startTime);
  }

  if (calendarRef.current && !popup.visible) {
    const calendarApi = calendarRef.current.getApi();
    const scroller = calendarApi.el.querySelector('.fc-scroller-liquid-absolute');
    scroller.style.overflow = 'auto';
  }

  return (
    <Box sx={styles.demoAppMain}>
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
      {popup.visible && event && (
        <EventPopup event={event} handleClosePopup={handleClosePopup} popup={popup} popupPosition={popupPosition} />
      )}
    </Box>
  );
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

export default Calendar;
