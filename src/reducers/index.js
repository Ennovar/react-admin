import { makeURL } from '../helpers/functions';
import {
  RECEIVE_MODELS,
  RECEIVE_ENTRIES,
} from '../constants';

const initialState = {
  model: '',
  entry: -1,
  mode: '',
  baseUrl: 'http://localhost:8080/api/',
  adminUrl: 'http://localhost:8080/api/admin',
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
    if (title === makeURL(array[i].tag)) {
      return i;
    }
  }
  return -1;
}

function toObj(array, param) {
  const outer = {};
  for (let i = 0; i < array.length; i++) {
    if (param === 'tag') {
      outer[makeURL(array[i].tag)] = array[i];
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
    case RECEIVE_MODELS:
      return { ...state, models: toObj(action.payload.data.models, 'tag') };
    case RECEIVE_ENTRIES: {
      return Object.assign({}, state, { models: Object.assign({}, state.models, { [state.model]: { ...state.models[state.model], entries: toObj(action.payload.data, 'id') } }) });
    }
    default:
      return state;
  }
}
