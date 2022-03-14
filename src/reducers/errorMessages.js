export const errorMessage = (state = "", action) => {
  switch (action.type) {
    case "SIGNIN_ERROR":
      return (state = action.payload);
    case "ERROR_CLEAR":
      return (state = "");
    default:
      return state;
  }
};
