import { messaging } from './firebase.js';
import { useEffect } from 'react';

import { getToken, onMessage } from 'firebase/messaging';
import { GoogleLoginFrontend } from '@my-org/google-login-frontend';
import Form from './formProgress/form.js';
import { handleSubscription } from './registerSW.js';

export function App() {
  async function requestPermissionq() {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      console.log('persssion');

      const currenToken = await getToken(messaging, {
        vapidKey:
          'BJmMKl_D9oKDc3L6Qa6NjSQ9-OnJfAQU-4liZWQatOlRmObVHU6f6XBcSKGg9uatJUycdRWhsCDi4zqYQYwyPgo',
      }).then((curr) => curr);
      console.log(currenToken);
    } else if (permission === 'denied') {
      alert('denied');
    }
  }

  useEffect(() => {
    // requestPermissionq();
    handleSubscription();
  }, []);
  return (
    <div>
      <h5> hdloe </h5>
      <Form />
      {/* <GoogleLoginFrontend /> */}
    </div>
  );
}

export default App;
