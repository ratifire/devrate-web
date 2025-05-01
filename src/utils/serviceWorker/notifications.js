export const requestNotificationPermission = async () => {
  if (!('Notification' in window)) return 'not-supported';
  return await Notification.requestPermission();
};

export const subscribeToPush = async () => {
  if (!('serviceWorker' in navigator)) return null;

  const reg = await navigator.serviceWorker.ready;
  const sub = await reg.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(
      'BPWrpWWIY2apsKVP_6OcBaE1fPK5p3HhHGc9I49xYkMLZN1gDaNQTtNLKCRbyZGUwFYXvODKexO-27OiVqFno8Q'
    ),
  });

  // Send subscription to your server
  await fetch('http://localhost:5001/subscribe', {
    method: 'POST',
    body: JSON.stringify(sub),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return sub;
};

// Helper function
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = atob(base64);
  return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
}
