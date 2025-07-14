import serviceWorkerNotificationApiSlice from '/src/redux/api/slices/serviceWorkerNotification/serviceWorkerNotification.js';

let currentSubscription = null;

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
      'BLxTVw4ldyA_jWHqxVyR2w-o3LZ5z_S1IMwyz7ZQ2dsNq0aqsaNVk7C2x4F0K8GO28FR5r_apta-JJLkivHc81A'
    ),
  });

  // Store the subscription to send it to the server. Otherwise, it will be null
  currentSubscription = sub;

  //  Send a subscription to your server.
  //  Dispatch the mutation manually through the store because cannot use a mutation outside the React component
  const result = await store.dispatch(serviceWorkerNotificationApiSlice.endpoints.subscribeToPush.initiate(sub));

  if ('error' in result) {
    throw new Error(result.error);
  }

  return sub;
};

export const getCurrentSubscription = () => currentSubscription;

// Helper function
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = atob(base64);
  return Uint8Array.from([...rawData].map((char) => char.charCodeAt(0)));
}
