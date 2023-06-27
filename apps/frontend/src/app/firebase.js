// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';

// import 'firebase/messaging';
import { getToken, onMessage } from 'firebase/messaging';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAsPdMXkrDA4U1f2ni3hP7ucgrNdWSblz4',
  authDomain: 'notification-604b2.firebaseapp.com',
  projectId: 'notification-604b2',
  storageBucket: 'notification-604b2.appspot.com',
  messagingSenderId: '676276046586',
  appId: '1:676276046586:web:c14b4e3162b77fbe5e1743',
  measurementId: 'G-2SG1JY5ZHX',
};

// Initialize Firebase

export const firebaseApp = initializeApp(firebaseConfig);

export const messaging = getMessaging(firebaseApp);
