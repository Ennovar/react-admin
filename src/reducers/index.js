const initialState = {
  selected: 0,
};

export function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case 'CHANGE_SELECTION':
      return { ...state, selected: action.payload };
    default:
      return state;
  }
}
