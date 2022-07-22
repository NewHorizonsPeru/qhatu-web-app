import instance from '../axios/instance';

const signIn = async (userToLogin) => {
  let pathSignIn = '/security/auth';

  try {
    const authResponse = await instance.post(pathSignIn, userToLogin);
    return {
      success: authResponse.status === 200,
      data: authResponse.data,
    };
  } catch (error) {
    return {
      success: false,
      data: undefined,
    };
  }
};

const signUp = async (userToSignUp) => {
  let pathSignUp = '/security/signUp';
  const response = await instance.post(pathSignUp, userToSignUp, {});

  return {
    success: response.status === 200,
    data: response.data,
  };
};

const AuthService = {
  signIn: signIn,
  signUp: signUp,
};

export default AuthService;
