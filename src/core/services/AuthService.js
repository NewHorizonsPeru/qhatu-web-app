import qhatuInstance from '../axios/qhatuInstance';

const signIn = async (userToLogin) => {
  const pathSignIn = process.env.REACT_APP_QHATU_PATH_SIGNIN;
  console.log(pathSignIn);
  try {
    const authResponse = await qhatuInstance.post(pathSignIn, userToLogin);
    return {
      success: authResponse.status === 200,
      data: authResponse.data,
    };
  } catch (error) {}
};

const signUp = async (userToRegister) => {
  const pathSignUp = process.env.REACT_APP_QHATU_PATH_SIGNUP;
  try {
    const authResponse = await qhatuInstance.post(pathSignUp, userToRegister);
    return {
      success: authResponse.status === 200,
      data: authResponse.data,
    };
  } catch (error) {}
};

const AuthService = {
  signIn: signIn,
  signUp: signUp,
};

export default AuthService;
