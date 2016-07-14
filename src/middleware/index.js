import {
  GET_MODELS,
  GET_ENTRIES,
  CHANGE_LOCATION,
} from '../constants';
import {
  receiveModels,
  receiveEntries,
  putUpdate,
  postCreate,
  deleteDelete,
} from '../api';
import {
  getModels,
  getEntries,
  setAdminURL,
  setBaseURL,
  setModel,
  setEntry,
  requestModels,
  requestEntries,
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

function shouldSetModel(model, next) {
  return model === '' || model !== next;
}

function shouldGetEntries(model) {
  const path = window.location.pathname;
  return (model !== null && typeof(model) !== 'undefined');
}

function shouldGetModels(models) {
  return Object.keys(models).length === 0;
}

function shouldGetEntry(entry) {
  const path = window.location.pathname;
  return (entry !== null && typeof(entry) !== 'undefined' && path.indexOf('edit') === -1);
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
      if (shouldGetModels(store.getState().reducer.models)) {
        store.dispatch(getModels()).then(() => {
          const { entry, model } = action.payload.params;
          if (shouldGetEntries(model, entry)) {
            if (shouldSetModel(store.getState().reducer.selectedModel, model)) {
              store.dispatch(setModel(model));
            }
            store.dispatch(getEntries(model)).then(() => {
              if (shouldGetEntry(entry)) {
                store.dispatch(setEntry(Number(entry)));
              } else {
                store.dispatch(setEntry(Number(Object.keys(store.getState().reducer.models[store.getState().reducer.selectedModel].entries)[0])));
              }
            });
          }
        });
      } else if (shouldGetEntries(action.payload.params.model)) {
        const { model } = action.payload.params;
        if (shouldSetModel(store.getState().reducer.selectedModel, model)) {
          store.dispatch(setModel(model));
        }
        store.dispatch(getEntries(model)).then(() => {
          if (shouldGetEntry(action.payload.params.entry)) {
            const { entry } = action.payload.params;
            store.dispatch(setEntry(Number(entry)));
          } else {
            store.dispatch(setEntry(Number(Object.keys(store.getState().reducer.models[store.getState().reducer.selectedModel].entries)[0])));
          }
        });
      } else if (shouldGetEntry(action.payload.params.entry)) {
        const { entry } = action.payload.params;
        store.dispatch(setEntry(Number(entry)));
      }
      break;
    case GET_MODELS:
      if (store.getState().reducer.adminURL !== '') {
        store.dispatch(requestModels());
        return store.dispatch(receiveModels(store.getState().reducer.adminURL));
      }
      store.dispatch(setAdminURL());
      store.dispatch(setBaseURL());
      return store.dispatch(getModels());
    case GET_ENTRIES:
      const crud = getCRUDFromModelWithTag(action.meta.modelTag, store.getState().reducer.models);
      if (!crud) {
        return store.dispatch(receiveModels(store.getState().adminUrl));
      }
      store.dispatch(requestEntries(action.meta.modelTag));
      return store.dispatch(receiveEntries(store.getState().reducer.baseURL + crud.index, action.meta.modelTag));
    case 'SETUP_UPDATE':
      const crud2 = getCRUDFromModelWithTag(store.getState().reducer.selectedModel, store.getState().reducer.models);
      if (crud2) {
        return store.dispatch(putUpdate(action.data, store.getState().reducer.baseURL + crud2.update.replace(':id', action.id.toString())));
      }
      break;
    case 'REQUEST_CREATE': {
      const { models, selectedModel } = store.getState().reducer;
      const crud3 = getCRUDFromModelWithTag(selectedModel, models);
      if (crud3) {
        const { baseURL } = store.getState().reducer;
        return store.dispatch(postCreate(action.data, baseURL + crud3.create));
      }
      break;
    }
    case 'REQUEST_DELETE': {
      const { baseURL, models, selectedModel } = store.getState().reducer;
      const crud4 = getCRUDFromModelWithTag(selectedModel, models);
      if (crud4) {
        return store.dispatch(deleteDelete(baseURL + crud4.delete.replace(':id', action.id.toString())));
      }
      break;
    }
    default:
      break;

  }
  const result = next(action);
  return result;
};
