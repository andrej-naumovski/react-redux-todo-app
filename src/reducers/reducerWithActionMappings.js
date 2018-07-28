const reducerWithActionMappings = (mappings, initialState) => {
  if (!initialState) {
    throw new Error('Initial state must be defined!');
  }

  return (state = initialState, action) => {
    const reducer = mappings[action.type];
    if (!reducer) {
      return state;
    }

    return reducer(state, action);
  };
};

export default reducerWithActionMappings;
