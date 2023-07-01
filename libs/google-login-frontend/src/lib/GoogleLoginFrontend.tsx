import { ConsoleLogger } from '@nestjs/common';
import styles from './GoogleLoginFrontend.module.css';
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useEffect, useState } from 'react';
import axios from 'axios';

/* eslint-disable-next-line */
export interface GoogleLoginFrontendProps {}

export function GoogleLoginFrontend(props: GoogleLoginFrontendProps) {
  const [user, setUser] = useState<{
    access_token: string;
  }>({ access_token: '' });
  const [profile, setProfile] = useState<{
    email: string;
    name: string;
    picture: string;
  } | null>(null);

  const login = useGoogleLogin({
    onSuccess: (codeRes) => setUser(codeRes),
    onError: (error) => console.log(error),
  });

  const logOut = () => {
    googleLogout();
    setProfile([]);
  };

  const handleSuccess = (res: any) => {
    console.log('res', res);
  };
  const handleError = () => {
    console.log('handling error');
  };

  useEffect(() => {
    if (user.access_token !== '') {
      console.log('suers', user);
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json',
            },
          }
        )
        .then((res) => {
          console.log(res);
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user.access_token]);
  return (
    <div className={styles['container']}>
      <h1>Welcome to GoogleLoginFrontend!</h1>
      <h2>Login with Google</h2>
      {profile ? (
        <div>
          <img src={profile.picture} alt="user image" />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <button onClick={() => login()}>Sign in with Google 🚀 </button>
      )}
    </div>
  );
}

export default GoogleLoginFrontend;
