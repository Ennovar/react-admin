// Library imports
import { combineReducers } from 'redux';

// User imports
//  - Helpers
import { toObj } from '../helpers/functions';
//  - Action Constants
import {
  RECEIVE_ENTRIES,
  RECEIVE_MODELS,
  REQUEST_ENTRIES,
  REQUEST_MODELS,
  SET_ADMIN_URL,
  SET_BASE_URL,
  SET_MODEL,
  SET_ENTRY,
  SET_MODE,
} from '../constants';

// function getIndex(title, array) {
//   for (let i = 0; i < array.length; i++) {
//     if (title === makeURL(array[i].tag)) {
//       return i;
//     }
//   }
//   return -1;
// }

function adminURL(state = '', action) {
  switch (action.type) {
    case SET_ADMIN_URL:
      return action.url;
    default:
      return state;
  }
}

function baseURL(state = '', action) {
  switch (action.type) {
    case SET_BASE_URL:
      return action.url;
    default:
      return state;
  }
}

function currentMode(state = '', action) {
  switch (action.type) {
    case SET_MODE:
      return action.mode;
    default:
      return state;
  }
}

function selectedEntry(state = 0, action) {
  switch (action.type) {
    case SET_ENTRY:
      return action.entry;
    default:
      return state;
  }
}

function selectedModel(state = '', action) {
  switch (action.type) {
    case SET_MODEL:
      return action.model;
    default:
      return state;
  }
}

function model(state = {}, action) {
  switch (action.type) {
    case REQUEST_ENTRIES:
      return { ...state, isFetching: true };
    case RECEIVE_ENTRIES:
      return Object.assign({}, state, {
        isFetching: false,
        entries: toObj(action.payload.data, 'id'),
      });
    default:
      return state;
  }
}

function models(state = {}, action) {
  switch (action.type) {
    case RECEIVE_MODELS:
      return toObj(action.payload.data.models, 'tag');
    case RECEIVE_ENTRIES:
      return Object.assign({}, state, {
        [action.meta.model]: model(state[action.meta.model], action),
      });
    case REQUEST_ENTRIES:
      return Object.assign({}, state, {
        [action.meta.modelTag]: model(state[action.meta.modelTag], action),
      });
    case REQUEST_MODELS:
      return state;
    default:
      return state;
  }
}

// export function reducer(state = initialState, action) {
//   switch (action.type) {
//     case 'SET_MODEL':
//       return { ...state, model: action.payload };
//     case 'SET_ENTRY':
//       return { ...state, entry: action.payload };
//     case 'CHANGE_MODE':
//       return { ...state, mode: action.payload };
//     case RECEIVE_MODELS: {
//       let newState = { ...state, models: toObj(action.payload.data.models, 'tag') };
//       if (state.model === 'Loading...') {
//         newState = { ...newState, model: Object.keys(newState.models)[0] };
//       }
//       return newState;
//     }
//     case RECEIVE_ENTRIES: {
//       const newState = { ...state, model: action.meta.model };
//       return Object.assign({}, newState, { models: Object.assign({}, newState.models, { [newState.model]: { ...newState.models[newState.model], entries: toObj(action.payload.data, 'id') } }) });
//     }
//     default:
//       return state;
//   }
// }

const reducer = combineReducers({
  adminURL,
  baseURL,
  currentMode,
  selectedModel,
  selectedEntry,
  models,
});

export default reducer;
