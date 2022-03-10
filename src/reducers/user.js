const initalState = {
  id: "",
  name: "",
  password: "",
  email: "",
  joined: "",
  age: "",
  color: "",
};
export const user = (state = initalState, action) => {
  switch (action.type) {
    case "EMAIL":
      return { ...state, email: action.payload };
    case "NAME":
      return { ...state, name: action.payload };
    case "PASSWORD":
      return { ...state, password: action.payload };
    case "AGE":
      return { ...state, password: action.payload };
    case "COLOR":
      return { ...state, password: action.payload };
    case "LOAD":
      return (state = action.payload);
    case "SIGNOUT":
      return (state = initalState);
    default:
      return state;
  }
};

export const signedIn = (state = false, action) => {
  switch (action.type) {
    case "USERSIGNOUT":
      return (state = false);
    case "USERSIGNIN":
      return (state = true);
    default:
      return state;
  }
};
