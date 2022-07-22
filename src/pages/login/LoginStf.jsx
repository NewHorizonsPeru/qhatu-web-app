import React, { useRef } from 'react';
import LoginStl from './LoginStl';
import AuthService from '../../core/services/AuthService';
import TokenService from '../../core/services/TokenService';

const LoginStf = () => {
  const refEmail = useRef(null);
  const refPassword = useRef(null);

  const handleClickSignIn = async () => {
    const email = refEmail.current?.value;
    const password = refPassword.current?.value;

    if (email && password) {
      const userToLogin = {
        username: email,
        password,
      };
      const authReponse = await AuthService.signIn(userToLogin);
      if (authReponse.success) {
        authReponse.data.user.token = authReponse.data.token;
        TokenService.setUserData(authReponse.data.user);
      } else {
      }
    }
  };
  return (
    <LoginStl
      refEmail={refEmail}
      refPassword={refPassword}
      handleClickSignIn={handleClickSignIn}
    />
  );
};

export default LoginStf;
