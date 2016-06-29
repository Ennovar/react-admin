import { makeURL } from '../helpers/functions';
import {
  RECEIVE_MODELS,
  RECEIVE_ENTRIES,
} from '../constants';

const initialState = {
  model: 'no_models',
  entry: -1,
  mode: '',
  baseUrl: 'http://reactadmintestapi.herokuapp.com/api/',
  adminUrl: 'http://reactadmintestapi.herokuapp.com/api/admin',
  models: {
    no_models: {
      title: 'No Models',
      entry_selected: 0,
      entries: {
        0: {
          title: 'No Model Selected',
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
      return { ...state, entry: action.payload };
    case 'CHANGE_MODE':
      return { ...state, mode: action.payload };
    case RECEIVE_MODELS: {
      let newState = { ...state, models: toObj(action.payload.data.models, 'tag') }
      if (state.model === 'no_models') {
        newState = { ...newState, model: Object.keys(newState.models)[0] };
      }
      return newState;
    }
    case RECEIVE_ENTRIES: {
      return Object.assign({}, state, { models: Object.assign({}, state.models, { [state.model]: { ...state.models[state.model], entries: toObj(action.payload.data, 'id') } }) });
    }
    default:
      return state;
  }
}
