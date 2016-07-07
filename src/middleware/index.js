import {
  REQUEST_MODELS,
  REQUEST_ENTRIES,
  RECEIVE_MODELS,
  CHANGE_LOCATION,
} from '../constants';
import {
  getModels,
  getEntries,
} from '../api';
import {
  setModel,
  setEntry,
} from '../actions';

function getCRUDFromModelWithTag(tag, models) {
  for (let prop in models) {
    const model = models[prop];
    if (model.tag === tag) {
      return model.crud;
    }
  }
  return null;
}

function shouldSetModel(model) {
  if (model === 'Loading...') {
    return true;
  }
  return false;
}

function shouldGetEntries(model) {
  if (model === null || typeof(model) === 'undefined') {
    return false;
  }
  return true;
}

function shouldGetModels(model) {
  return true;
}

function shouldGetEntry(entry) {
  if (entry === null || typeof(entry) === 'undefined') {
    return false;
  }
  return true;
}

// function compareKeys(a, b) {
//   const aKeys = Object.keys(a).sort();
//   const bKeys = Object.keys(b).sort();
//   return JSON.stringify(aKeys) !== JSON.stringify(bKeys);
// }

export const logger = store => next => action => {
  switch (action.type) {
    case CHANGE_LOCATION:
      // Always get models first
      if (shouldGetModels()) {
        store.dispatch(getModels(store.getState().reducers.adminUrl)).then(() => {
          if (shouldGetEntries(action.payload.params.model)) {
            const crud = getCRUDFromModelWithTag(action.payload.params.model, store.getState().reducers.models);
            store.dispatch(getEntries(store.getState().reducers.baseUrl + crud.index, action.payload.params.model)).then(() => {
              if (shouldGetEntry(action.payload.params.entry)) {
                store.dispatch(setEntry(Number(action.payload.params.entry)));
              }
            });
          }
        });
      }
      break;
    case REQUEST_MODELS:
      store.dispatch(getModels(store.getState().adminUrl));
      break;
    case REQUEST_ENTRIES: {
      const crud = getCRUDFromModelWithTag(action.meta.modelTag, store.getState().models);
      if (!crud) {
        store.dispatch(getModels(store.getState().adminUrl));
      } else {
        store.dispatch(getEntries(store.getState().baseUrl + crud.index));
      }
      break;
    }
    default:
      break;

  }
  const result = next(action);
  return result;
};
