export const incrementp1 = (num = 0) => {
  return {
    type: "INCREMENTP1",
    payload: num,
  };
};

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
export const userSignOut = () => {
  return {
    type: "USERSIGNOUT",
    payload: "signout",
  };
};

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

export const load = (data) => {
  return {
    type: "LOAD",
    payload: data,
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

export const changeModal = (data) => {
  return {
    type: "CHANGE_MODAL",
    payload: data,
  };
};
