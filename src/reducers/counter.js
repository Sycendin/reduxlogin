export const counterReducerP1 = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENTP1":
      return state + action.payload;
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
};
