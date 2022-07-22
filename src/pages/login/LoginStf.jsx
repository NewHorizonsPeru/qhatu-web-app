import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import LoginStl from './LoginStl';
import AuthService from '../../core/services/AuthService';
import TokenService from '../../core/services/TokenService';
import qhatuActions from '../../core/actions/qhatuActions';

const LoginStf = () => {
  const dispatch = useDispatch();
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
      dispatch(qhatuActions.backdropAction(true));
      const authReponse = await AuthService.signIn(userToLogin);
      dispatch(qhatuActions.backdropAction());
      if (authReponse.success) {
        authReponse.data.user.token = authReponse.data.token;
        TokenService.setUserData(authReponse.data.user);
        dispatch(qhatuActions.userDataAction());
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
