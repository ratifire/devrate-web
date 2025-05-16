import serviceWorkerNotificationApiSlice from '/src/redux/api/slices/serviceWorkerNotification/serviceWorkerNotification.js';

export const requestNotificationPermission = async () => {
  if (!('Notification' in window)) return 'not-supported';
  return await Notification.requestPermission();
};

export const subscribeToPush = async (store) => {
  if (!('serviceWorker' in navigator)) return null;

  const reg = await navigator.serviceWorker.ready;
  const sub = await reg.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(
      'BPWrpWWIY2apsKVP_6OcBaE1fPK5p3HhHGc9I49xYkMLZN1gDaNQTtNLKCRbyZGUwFYXvODKexO-27OiVqFno8Q'
    ),
  });

  //  Send a subscription to your server.
  //  Dispatch the mutation manually through the store because cannot use a mutation outside React component
  const result = await store.dispatch(serviceWorkerNotificationApiSlice.endpoints.subscribeToPush.initiate(sub));

  if ('error' in result) {
    throw new Error(result.error);
  }

  return sub;
};

// Helper function
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = atob(base64);
  return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
}
