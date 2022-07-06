import React, { useRef } from 'react';

import RegisterStl from './RegisterStl';

const RegisterStf = () => {
  const refFirstName = useRef(null);
  const refLastName = useRef(null);
  const refEmail = useRef(null);
  const refDocumentNumber = useRef(null);
  const refPhoneNumber = useRef(null);
  const refAddress = useRef(null);
  const refPassword = useRef(null);

  return (
    <RegisterStl
      refFirstName={refFirstName}
      refLastName={refLastName}
      refEmail={refEmail}
      refDocumentNumber={refDocumentNumber}
      refPhoneNumber={refPhoneNumber}
      refAddress={refAddress}
      refPassword={refPassword}
    />
  );
};

export default RegisterStf;
