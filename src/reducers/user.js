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
    default:
      return state;
  }
};
