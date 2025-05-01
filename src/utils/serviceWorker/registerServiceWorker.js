export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    const registration = await navigator.serviceWorker.register('/sw.js');
    // console.log('ServiceWorker registration successful:', registration);
    return registration;
  }
};
