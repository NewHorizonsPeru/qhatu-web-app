import React, { useRef } from 'react';
import LoginStl from './LoginStl';

const LoginStf = () => {
  const refEmail = useRef(null);
  const refPassword = useRef(null);

  return <LoginStl refEmail={refEmail} refPassword={refPassword} />;
};

export default LoginStf;
