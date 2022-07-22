import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import AuthService from '../../core/services/AuthService';
import RegexValidations from '../../core/pipes/RegexValidations';
import RegisterStl from './RegisterStl';
import { useSelector, useDispatch } from 'react-redux';
import qhatuActions from '../../core/actions/globalActions';

const RegisterStf = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const alertMessage = useSelector((state) => state.alertMessage);

  useEffect(() => {
    return () => {
      dispatch(qhatuActions.alertMessageAction(false));
      closeModal();
    };
  }, []);

  const closeModal = () => {
    dispatch(qhatuActions.modalAction(false));
  };

  const refFirstName = useRef(null);
  const refLastName = useRef(null);
  const refEmail = useRef(null);
  const refDocumentNumber = useRef(null);
  const refPhoneNumber = useRef(null);
  const refAddress = useRef(null);
  const refPassword = useRef(null);

  const handleClickSignUp = async () => {
    const firstName = refFirstName.current?.value;
    const lastName = refLastName.current?.value;
    const email = refEmail.current?.value;
    const documentNumber = refDocumentNumber.current?.value;
    const phoneNumber = refPhoneNumber.current?.value;
    const address = refAddress.current?.value;
    const password = refPassword.current?.value;

    if (
      firstName &&
      lastName &&
      email &&
      documentNumber &&
      phoneNumber &&
      address &&
      password
    ) {
      //const currentUser = await AuthenticationService.ValidateUser(email);
      // if (currentUser) {
      //   dispatch(
      //     QhatuAction.modalAction(
      //       true,
      //       () => {
      //         closeModal();
      //       },
      //       'Lo sentimos 😔',
      //       'El usuario ya se encuentra registrado.'
      //     )
      //   );
      // } else {
      const userToSignUp = {
        firstName,
        lastName,
        username: email,
        documentNumber,
        mobilePhone: phoneNumber,
        photoUrl: address,
        password,
      };
      dispatch(qhatuActions.backdropAction(true));
      const resultSignUp = await AuthService.signUp(userToSignUp);
      dispatch(qhatuActions.backdropAction(false));
      if (resultSignUp.success) {
        dispatch(
          qhatuActions.modalAction(
            true,
            () => {
              history.push('/login');
            },
            'Bienvenido 😁',
            'El usuario se registró correctamente.'
          )
        );
      }
    } else {
      dispatch(
        qhatuActions.alertMessageAction(
          true,
          'Debe ingresar nombres, apellidos, correo y una contraseña para poderse registrar.'
        )
      );
    }
  };

  const handleChangeInput = (e) => {
    const nameInput = e.target.name;
    const valueInput = e.target.value;

    const isValid =
      nameInput === 'txtEmail'
        ? RegexValidations.ValidateEmail(valueInput)
        : RegexValidations.ValidatePassword(valueInput);
    let messageValidation =
      nameInput === 'txtEmail'
        ? 'Debe ingresar un correo válido.'
        : 'Debe ingresar mas de 6 caracteres.';

    dispatch(qhatuActions.alertMessageAction(!isValid, messageValidation));
  };

  return (
    <RegisterStl
      alertMessage={alertMessage}
      refFirstName={refFirstName}
      refLastName={refLastName}
      refEmail={refEmail}
      refDocumentNumber={refDocumentNumber}
      refPhoneNumber={refPhoneNumber}
      refAddress={refAddress}
      refPassword={refPassword}
      handleChangeInput={handleChangeInput}
      handleClickSignUp={handleClickSignUp}
    />
  );
};

export default RegisterStf;
