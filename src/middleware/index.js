import {
  GET_MODELS,
  GET_ENTRIES,
  RECEIVE_MODELS,
} from '../constants';
import {
  getModels,
  getEntries,
} from '../api';

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
export const logger = store => next => action => {
  switch (action.type) {
    case GET_MODELS:
      store.dispatch(getModels(store.getState().adminUrl));
      break;
    case GET_ENTRIES:
      console.log(store.getState().models);
      const crud = getCRUDFromModelWithTag(action.meta.modelTag, store.getState().models);
      store.dispatch(getEntries(store.getState().baseUrl + crud.index));
    default:
      break;

  }
  const result = next(action);
  return result;
}
