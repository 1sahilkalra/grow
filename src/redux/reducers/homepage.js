const InitialState = {
  result: "hello from initial state"
};

export default (state = InitialState, action) => {
  switch (action.type) {
    case "HOME_ACTION":
      return { result: "hello from updated state" };
    default:
      return state;
  }
};
