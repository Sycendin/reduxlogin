export const toggleModal = (state = false, action) => {
  switch (action.type) {
    case "CHANGE_MODAL":
      return (state = action.payload);
    default:
      return state;
  }
};
