export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    const registration = await navigator.serviceWorker.register('/sw.js');

    if (registration.active) {
      registration.active.postMessage({ lang: navigator.language });
    }

    // console.log('ServiceWorker registration successful:', registration);
    return registration;
  }
};
