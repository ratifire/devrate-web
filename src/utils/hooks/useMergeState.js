import { useState } from 'react';

const useMergeState = (initialState) => {
  const [state, setState] = useState(initialState);
  const updateState = (newState) => setState((prevState) => ({ ...prevState, ...newState }));

  return [state, updateState];
};

export default useMergeState;
