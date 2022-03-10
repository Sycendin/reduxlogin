const initalState = {
  id: "",
  name: "",
  password: "",
  email: "",
  joined: "",
};
export const user = (state = initalState, action) => {
  switch (action.type) {
    case "EMAIL":
      return { ...state, email: action.payload };
    case "NAME":
      return { ...state, name: action.payload };
    case "PASSWORD":
      return { ...state, password: action.payload };
    case "LOAD":
      return (state = action.payload);
    case "SIGNOUT":
      return (state = initalState);
    default:
      return state;
  }
};

export const signedIn = (state = true, action) => {
  switch (action.type) {
    case "USERSIGNOUT":
      return (state = false);
    case "USERSIGNIN":
      return (state = true);
    default:
      return state;
  }
};
