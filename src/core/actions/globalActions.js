const userDataAction = () => {
  return {
    type: '@qhatu/callUserData',
  };
};

const alertMessageAction = (open = false, message = '') => {
  return {
    type: '@qhatu/callAlertMessage',
    payload: {
      open: open,
      message: message,
    },
  };
};

const modalAction = (
  open = false,
  callback = () => {},
  title = '',
  subtitle = ''
) => {
  return {
    type: '@qhatu/callModal',
    payload: {
      open: open,
      callback: callback,
      title: title,
      subtitle: subtitle,
    },
  };
};

const backdropAction = (open = false) => {
  return {
    type: '@qhatu/callBackdrop',
    payload: {
      open: open,
    },
  };
};

const shoppingCartAction = (id = 0) => {
  return {
    type: '@qhatu/callShoppingCart',
    payload: {
      id: id,
      quantity: 1,
    },
  };
};

const qhatuActions = {
  backdropAction: backdropAction,
  userDataAction: userDataAction,
  shoppingCartAction: shoppingCartAction,
  alertMessageAction: alertMessageAction,
  modalAction: modalAction,
};

export default qhatuActions;
