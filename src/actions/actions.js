export const incrementp1 = (num = 0) => {
  return {
    type: "INCREMENTP1",
    payload: num,
  };
};
// Routes
export const routeSignIn = () => {
  return {
    type: "SIGNIN",
    payload: "signin",
  };
};

export const routeRegister = () => {
  return {
    type: "REGISTER",
    payload: "register",
  };
};

export const routeOther = () => {
  return {
    type: "OTHER",
    payload: "other",
  };
};

// User
export const updateEmail = (email) => {
  return {
    type: "EMAIL",
    payload: email,
  };
};

export const updateName = (name) => {
  return {
    type: "NAME",
    payload: name,
  };
};

export const updatePassword = (password) => {
  return {
    type: "PASSWORD",
    payload: password,
  };
};

export const updateAge = (age) => {
  return {
    type: "AGE",
    payload: age,
  };
};
export const updateColor = (color) => {
  return {
    type: "Color",
    payload: color,
  };
};
export const updatePicture = (picture) => {
  return {
    type: "picture",
    payload: picture,
  };
};
export const load = (data) => {
  return {
    type: "LOAD",
    payload: data,
  };
};
// User sign in status
export const userSignOut = () => {
  return {
    type: "USERSIGNOUT",
    payload: "signout",
  };
};
export const userSignedIn = () => {
  return {
    type: "USERSIGNIN",
    payload: "signin",
  };
};

export const unLoadUser = () => {
  return {
    type: "SIGNOUT",
    payload: "signout",
  };
};
// Modal
export const changeModal = (data) => {
  return {
    type: "CHANGE_MODAL",
    payload: data,
  };
};

// Messages that will eventually be displayed
export const hiddenMessage = () => {
  return {
    type: "UNHIDDEN",
    payload: "hidden",
  };
};

export const hiddenMessageGet = () => {
  return {
    type: "UNHIDDENGET",
    payload: "hiddenget",
  };
};
export const hideCode = () => {
  return {
    type: "HIDECODE",
    payload: "hidecode",
  };
};
export const hideMessage = () => {
  return {
    type: "HIDEMESSAGE",
    payload: "hidecode",
  };
};
export const getMessageCode = (code) => {
  return {
    type: "GET_CODE",
    payload: code,
  };
};
export const recievedMessage = (code) => {
  return {
    type: "GET_MESSAGE",
    payload: code,
  };
};
export const messageDNE = () => {
  return {
    type: "MESSAGE_DNE",
  };
};
// Error messages

export const errorSignin = (message) => {
  return {
    type: "SIGNIN_ERROR",
    payload: message,
  };
};

export const errorClear = (message) => {
  return {
    type: "ERROR_CLEAR",
    payload: message,
  };
};
