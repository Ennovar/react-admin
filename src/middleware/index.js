import {
  GET_MODELS,
  GET_ENTRIES,
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
    console.log(model)
    if (model.tag === tag) {
      return model.crud;
    }
  }
  return null;
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

export const logger = store => next => action => {
  switch (action.type) {
    case CHANGE_LOCATION:
      if (shouldGetModels()) {
        store.dispatch(getModels(store.getState().reducers.adminUrl)).then(
          function() {
            console.log(action.payload.params.model)
            if (shouldGetEntries(action.payload.params.model)) {
              console.log(store.getState().reducers)
              const crud = getCRUDFromModelWithTag(action.payload.params.model, store.getState().reducers.models);
              store.dispatch(getEntries(store.getState().reducers.baseUrl + crud.index, action.payload.params.model)).then(
                function() {
                  if (shouldGetEntry(store.getState().routing.params.entry)) {
                    store.dispatch(setEntry(Number(action.payload.params.entry)));
                  }
                }
              );
            }
          }
        );
      }
      break;
    case GET_MODELS:
      store.dispatch(getModels(store.getState().adminUrl));
      break;
    case GET_ENTRIES: {
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
