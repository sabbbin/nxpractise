import * as ReactDOM from 'react-dom/client';

import App from './app/App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <GoogleOAuthProvider clientId="981757925834-7naum17l47vvtnm0k2ghncha2odua3sk.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
