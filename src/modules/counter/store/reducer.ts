type Action = { type: 'increase' } | { type: 'decrease' };

interface IState {
  counter: number;
}

export const reducer = (state: IState, action: Action) => {
  const { type } = action;
  const { counter } = state;
  switch (type) {
    case 'increase': {
      return { ...state, counter: counter + 1 };
    }
    case 'decrease': {
      if (counter - 1 >= 0) return { ...state, counter: counter - 1 };
      return state;
    }
    default:
      return state;
  }
};
