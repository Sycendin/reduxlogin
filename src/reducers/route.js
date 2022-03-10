export const routeSelect = (state = "other", action) => {
  switch (action.type) {
    case "SIGNIN":
      return (state = "signin");
    case "REGISTER":
      return (state = "register");
    case "OTHER":
      return (state = "other");
    default:
      return state;
  }
};
