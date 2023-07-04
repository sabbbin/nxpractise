export const handleSubscription = () => {
  let isSubscribed = false;
  let swRegistration = null;
  let anyReminder = false;

  //user object holds the user's reminder opt-in status as boolean.
  //checking if the user opted-in any of our reminder option

  if (!('Notification' in window)) {
    console.log('Notifications not supported in this browser');
    return;
  }

  function initializeUI() {
    // If user opted-in any of the reminder, get subscription data and send it to the server / database.
    subscribeUser();
    if (anyReminder) {
      swRegistration.pushManager.getSubscription().then((subscription) => {
        isSubscribed = subscription !== null;

        if (isSubscribed) {
          console.log('User IS subscribed.');
        }
      });
    } else {
      //If the user outed-out the reminder, unscribe the user.
    }
  }

  const applicationServerPublicKey =
    'BJmMKl_D9oKDc3L6Qa6NjSQ9-OnJfAQU-4liZWQatOlRmObVHU6f6XBcSKGg9uatJUycdRWhsCDi4zqYQYwyPgo';

  function subscribeUser() {
    //Prompt user permission for notification
    Notification.requestPermission((status) => {
      console.log('Notification permission status:', status);
    });
    //If the browser has a permission, process subscribing the user.
    if (Notification.permission === 'granted') {
      const applicationServerKey = urlB64ToUint8Array(
        applicationServerPublicKey
      );
      swRegistration.pushManager
        .subscribe({
          userVisibleOnly: true,
          applicationServerKey: applicationServerKey,
        })
        .then((subscription) => {
          console.log('User is subscribed:', subscription);

          isSubscribed = true;
        })
        .catch((err) => {
          if (Notification.permission === 'denied') {
            console.warn('Permission for notifications was denied');
          } else {
            console.error('Failed to subscribe the user: ', err);
          }
        });
    }
  }

  //parsing the VAPID key to correct format.
  function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  //Resister service worker.
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      console.log('Service Worker and Push is supported??');

      navigator.serviceWorker
        .register('sw.js')
        .then((swReg) => {
          console.log(
            'ServiceWorker registration successful with scope: ',
            swReg.scope
          );
          swRegistration = swReg;

          initializeUI();
        })
        .catch((err) => {
          console.error('Service Worker Error', err);
        });
    });
  } else {
    console.warn('Push messaging is not supported');
  }
};
