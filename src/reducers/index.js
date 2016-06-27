const initialState = {
  selected_model: '',
  mode: '',
  models: [
    {
      title: 'No Models Found',
      entry_selected: 0,
      entries: [
        {
          title: '',
        },
      ],
    },
  ],
};

export function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case 'CHANGE_MODEL':
      return { ...state, selected_model: action.payload };
    case 'CHANGE_MODE':
      return { ...state, mode: action.payload };
    case 'GET_MODELS':
      return { ...state, models: action.payload.data };
    default:
      return state;
  }
}
