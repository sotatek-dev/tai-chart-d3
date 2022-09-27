type CommonState = {
  test: boolean;
};

const initialState: CommonState = {
  test: false,
};

const Common = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default Common;
