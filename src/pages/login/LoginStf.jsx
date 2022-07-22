import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import qhatuActions from '../../core/actions/globalActions';
import AuthService from '../../core/services/AuthService';
import TokenService from '../../core/services/TokenService';
import LoginStl from './LoginStl';

const LoginStf = () => {
  const refEmail = useRef(null);
  const refPassword = useRef(null);

  const dispatch = useDispatch();
  const handleClickSignIn = async () => {
    const email = refEmail.current?.value;
    const password = refPassword.current?.value;

    if (email && password) {
      dispatch(qhatuActions.backdropAction(true));
      const userToLogin = {
        username: email,
        password,
      };
      const authResponse = await AuthService.signIn(userToLogin);
      dispatch(qhatuActions.backdropAction());
      if (authResponse.success) {
        authResponse.data.user.token = authResponse.data.token;
        TokenService.setUserData(authResponse.data.user);
        dispatch(qhatuActions.userDataAction());
      }
    }
  };
  const handleChangeInput = (e) => {};

  return (
    <LoginStl
      refEmail={refEmail}
      refPassword={refPassword}
      handleChangeInput={handleChangeInput}
      handleClickSignIn={handleClickSignIn}
    />
  );
};

export default LoginStf;
