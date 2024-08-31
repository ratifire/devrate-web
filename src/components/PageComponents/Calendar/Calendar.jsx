import React, { useEffect, useRef, useState } from 'react';
import Sidebar from './Sidebar';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import { styles } from './Calendar.styles';

export default function Calendar() {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const calendarRef = useRef(null);
  
  useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      const timeGridSlotElements = calendarApi.el.querySelectorAll('.fc-theme-standard td');
      const timeGridTodayElements = calendarApi.el.querySelectorAll('.fc .fc-timegrid-col.fc-day-today');
      const timeGridHeadElements = calendarApi.el.querySelectorAll('.fc-theme-standard th, .fc-theme-standard .fc-scrollgrid');
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
    }
  }, []);
  
  function handleWeekendsToggle() {
    setWeekendsVisible(!weekendsVisible);
  }
  
  function handleDateSelect(selectInfo) {
    let title = prompt('Please enter a new title for your event');
    let calendarApi = selectInfo.view.calendar;
    
    calendarApi.unselect(); // clear date selection
    
    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }
  
  function handleEventClick(clickInfo) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }
  
  function handleEvents(events) {
    setCurrentEvents(events);
  }
  
  function renderEventContent(eventInfo) {
    return (
        <>
          <b>{eventInfo.timeText}</b>
          <i>{eventInfo.event.title}</i>
        </>
    );
  }
  
  function handleEventDidMount(info) {
    // Create a tooltip element
    const tooltip = document.createElement('div');
    tooltip.className = 'eventTooltip';
    tooltip.innerHTML = info.event.extendedProps.description || info.event.title; // Tooltip content
    document.body.appendChild(tooltip);
    
    // Event listeners for mouse enter and leave
    info.el.addEventListener('mouseenter', function () {
      tooltip.style.display = 'block';
      tooltip.style.position = 'absolute';
      tooltip.style.left = info.el.getBoundingClientRect().left + 'px';
      tooltip.style.top = info.el.getBoundingClientRect().top - tooltip.offsetHeight + 'px';
    });
    
    info.el.addEventListener('mouseleave', function () {
      tooltip.style.display = 'none';
    });
    
    // Clean up tooltip on unmount
    info.el.addEventListener('remove', function () {
      tooltip.remove();
    });
  }
  
  return (
      <div style={styles.demoApp} className='demo-app'>
        <Sidebar
            weekendsVisible={weekendsVisible}
            handleWeekendsToggle={handleWeekendsToggle}
            currentEvents={currentEvents}
        />
        <div style={styles.demoAppMain} className='demo-app-main'>
          <FullCalendar
              ref={calendarRef}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              headerToolbar={false}
              initialView='timeGridWeek'
              firstDay={1}
              slotDuration="01:00:00"
              slotLabelInterval={{ hours: 1 }}
              expandRows={true}
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              weekends={weekendsVisible}
              initialEvents={INITIAL_EVENTS}
              select={handleDateSelect}
              eventContent={renderEventContent}
              eventClick={handleEventClick}
              eventsSet={handleEvents}
              eventDidMount={handleEventDidMount} // Add this line to mount tooltips
              dayHeaderFormat={{ weekday: 'short' }}
              allDaySlot={false}
              slotLabelFormat={{
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
              }}
              moreLinkClick="popover"
              dayPopoverFormat={{ day: 'numeric', month: 'long', year: 'numeric' }}
          />
        </div>
      </div>
  );
}

