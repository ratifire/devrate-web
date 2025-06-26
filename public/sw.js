self.addEventListener('install', (event) => {
  // console.log('Service Worker installed');
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  // console.log('Service Worker activated');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('push', (event) => {
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

  let url;
  switch (type) {
    case 'INTERVIEW_SCHEDULED': {
      const interviewId = parsedPayload?.interviewId;
      url = interviewId ? `/interviews/scheduled/${interviewId}` : '/';
      break;
    }
    default:
      url = '/';
  }

  const options = {
    body: notificationData.body,
    icon: notificationData.icon || '/assets/favicon.ico',
    data: { url },
  };

  event.waitUntil(self.registration.showNotification(notificationData.title || 'New Notification', options));
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
