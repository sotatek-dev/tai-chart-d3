type CommonState = {
  test: boolean;
};

const initialState: CommonState = {
  test: false,
};

const SetFactor = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default SetFactor;
