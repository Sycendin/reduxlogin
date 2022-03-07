export const routeSelect = (state = "register", action) => {
  switch (action.type) {
    case "SIGNIN":
      return (state = "signin");
    case "REGISTER":
      return (state = "register");
    default:
      return state;
  }
};
