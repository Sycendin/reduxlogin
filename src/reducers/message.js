export const toggleHidden = (state = true, action) => {
  switch (action.type) {
    case "UNHIDDEN":
      return (state = false);
    default:
      return state;
  }
};

export const messageCode = (state = "", action) => {
  switch (action.type) {
    case "GET_CODE":
      return (state = action.payload);
    default:
      return state;
  }
};

export const toggleHiddenGet = (state = true, action) => {
  switch (action.type) {
    case "UNHIDDENGET":
      return (state = false);
    default:
      return state;
  }
};

export const messageRecieved = (state = "", action) => {
  switch (action.type) {
    case "GET_MESSAGE":
      return (state = action.payload);
    case "MESSAGE_DNE":
      return (state = "Wrong Code");
    default:
      return state;
  }
};
