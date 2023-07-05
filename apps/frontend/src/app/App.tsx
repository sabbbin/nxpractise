import { messaging } from './firebase.js';
import { useEffect } from 'react';

import { getToken, onMessage } from 'firebase/messaging';
import { GoogleLoginFrontend } from '@my-org/google-login-frontend';
import Form from './formProgress/form.js';
import { handleSubscription } from './registerSW.js';
import { React18NewFeature } from '@my-org/react18-new-feature';
import ImperativeHandlerTest from 'libs/react18-new-feature/src/lib/useImperativeHandler.js';
import LayoutEffect from 'libs/react18-new-feature/src/lib/uselayoutEffect.js';
import Transistion from 'libs/react18-new-feature/src/lib/transistion.js';

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
    // handleSubscription();
  }, []);
  return (
    <div>
      <Transistion />

      <h5> hdloe </h5>
      {/* <React18NewFeature /> */}
      {/* <ImperativeHandlerTest /> */}
      <LayoutEffect />
      {/* <div className="h-52 w-44 bg-black">sadfa</div> */}
      {/* <Form /> */}
      {/* <GoogleLoginFrontend /> */}
    </div>
  );
}

export default App;
