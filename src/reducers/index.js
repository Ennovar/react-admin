import { makeURL } from '../helpers/functions';

const initialState = {
  model: '',
  entry: -1,
  mode: '',
  models: {
    nul: {
      title: '',
      entry_selected: 0,
      entries: {
        0: {
          title: '',
        },
      },
    },
  },
};

function getIndex(title, array) {
  for (let i = 0; i < array.length; i++) {
    if (title === makeURL(array[i].title)) {
      return i;
    }
  }
  return -1;
}

function toObj(array, param) {
  const outer = {};
  for (let i = 0; i < array.length; i++) {
    if (param === 'title') {
      outer[makeURL(array[i].title)] = array[i];
    } else if (param === 'id') {
      outer[array[i].id] = array[i];
    } else {
      // Do nothing
    }
  }
  return outer;
}

export function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case 'SET_MODEL':
      return { ...state, model: action.payload };
    case 'SET_ENTRY':
      return { ...state, selected_entry: action.payload };
    case 'CHANGE_MODE':
      return { ...state, mode: action.payload };
    case 'GET_MODELS':
      return { ...state, models: toObj(action.payload.data.models, 'title') };
    case 'GET_ENTRIES': {
      return Object.assign({}, state, { models: Object.assign({}, state.models, { [state.model]: { ...state.models[state.model], entries: toObj(action.payload.data, 'id') } }) });
    }
    default:
      return state;
  }
}
