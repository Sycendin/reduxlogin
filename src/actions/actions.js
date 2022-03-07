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
