const formatDateAndTime = (dateISO) => {
  // dateISO + 'Z' is used to ensure the date is treated as UTC
  const date = new Date(dateISO + 'Z');

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};

const createMessages = ({ scheduledDateTime, rejectionName }) => ({
  en: {
    title: {
      INTERVIEW_SCHEDULED: 'The interview is scheduled',
      INTERVIEW_REJECTED: 'The interview has been canceled',
    },
    body: {
      INTERVIEW_SCHEDULED: {
        INTERVIEWER: `The interview as an interviewer is scheduled for ${scheduledDateTime}`,
        CANDIDATE: `The interview as a candidate is scheduled for ${scheduledDateTime}`,
      },
      INTERVIEW_REJECTED: `The interview with ${rejectionName} on ${scheduledDateTime} has been canceled.`,
    },
  },
  uk: {
    title: {
      INTERVIEW_SCHEDULED: "Інтерв'ю заплановано",
      INTERVIEW_REJECTED: "Інтерв'ю скасовано",
    },
    body: {
      INTERVIEW_SCHEDULED: {
        INTERVIEWER: `Інтерв'ю як інтерв'юер заплановано на ${scheduledDateTime}`,
        CANDIDATE: `Інтерв'ю як кандидат заплановано на ${scheduledDateTime}`,
      },
      INTERVIEW_REJECTED: `Інтерв'ю з ${rejectionName} на ${scheduledDateTime} було скасовано.`,
    },
  },
});

self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('message', (event) => {
  self.lang = event.data.lang;
});

self.addEventListener('push', (event) => {
  const lang = self.lang || 'en';

  let notificationData;
  try {
    notificationData = event.data.json();
  } catch (e) {
    notificationData = {
      title: 'New Notification',
      body: e.data.text() || 'You have a new message!',
    };
  }

  const { type, payload } = notificationData;
  let parsedPayload = payload;
  if (typeof parsedPayload === 'string') {
    try {
      parsedPayload = JSON.parse(parsedPayload);
    } catch {
      //console.log('Received payload', e);
    }
  }

  const notificationPayload = JSON.parse(notificationData.payload);
  let url, scheduledDateTime, rejectionName, role;

  switch (type) {
    case 'INTERVIEW_SCHEDULED': {
      const interviewId = parsedPayload?.interviewId;
      url = interviewId ? `/interviews/scheduled/${interviewId}` : '/';
      scheduledDateTime = formatDateAndTime(notificationPayload.scheduledDateTime);
      role = notificationPayload.role;
      break;
    }
    case 'INTERVIEW_REJECTED': {
      url = 'interviews/requests';
      scheduledDateTime = formatDateAndTime(notificationPayload.scheduledDateTime);
      rejectionName = notificationPayload.rejectionName;
      break;
    }
    default:
      url = '/';
  }

  const messages = createMessages({ scheduledDateTime, rejectionName });

  const currentMessage = messages[lang] || messages.en;

  const options = {
    body: currentMessage.body[type][role] || currentMessage.body[type],
    icon: notificationData.icon || '/assets/favicon.ico',
    data: { url },
  };
  event.waitUntil(self.registration.showNotification(currentMessage.title[type] || 'New Notification', options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const urlToOpen = event.notification.data?.url || '/';

  event.waitUntil(
    self.clients.matchAll({ type: 'window' }).then((windowClients) => {
      const matchingClient = windowClients.find((client) => client.url === urlToOpen);
      return matchingClient ? matchingClient.focus() : self.clients.openWindow(urlToOpen);
    })
  );
});
