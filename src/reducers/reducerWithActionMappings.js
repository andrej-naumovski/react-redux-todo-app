const reducerWithActionMappings = (mappings, initialState) => {
  if (__DEV__ && !initialState) {
    throw new Error('Initial state must be defined!');
  }

  return (state, action) => {
    const reducer = mappings[action.type];
    if (!reducer) {
      return state;
    }

    return reducer(state, action);
  };
};

export default reducerWithActionMappings;
