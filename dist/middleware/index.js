'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = undefined;

var _constants = require('../constants');

var _api = require('../api');

var _actions = require('../actions');

function getCRUDFromModelWithTag(tag, models) {
  for (var prop in models) {
    var model = models[prop];
    console.log(model);
    if (model.tag === tag) {
      return model.crud;
    }
  }
  return null;
}

function shouldGetEntries(model) {
  if (model === null || typeof model === 'undefined') {
    return false;
  }
  return true;
}

function shouldGetModels(model) {
  return true;
}

function shouldGetEntry(entry) {
  if (entry === null || typeof entry === 'undefined') {
    return false;
  }
  return true;
}

var logger = exports.logger = function logger(store) {
  return function (next) {
    return function (action) {
      switch (action.type) {
        case _constants.CHANGE_LOCATION:
          if (shouldGetModels()) {
            store.dispatch((0, _api.getModels)(store.getState().reducers.adminUrl)).then(function () {
              console.log(action.payload.params.model);
              if (shouldGetEntries(action.payload.params.model)) {
                console.log(store.getState().reducers);
                var crud = getCRUDFromModelWithTag(action.payload.params.model, store.getState().reducers.models);
                store.dispatch((0, _api.getEntries)(store.getState().reducers.baseUrl + crud.index, action.payload.params.model)).then(function () {
                  if (shouldGetEntry(store.getState().routing.params.entry)) {
                    store.dispatch((0, _actions.setEntry)(Number(action.payload.params.entry)));
                  }
                });
              }
            });
          }
          break;
        case _constants.GET_MODELS:
          store.dispatch((0, _api.getModels)(store.getState().adminUrl));
          break;
        case _constants.GET_ENTRIES:
          {
            var crud = getCRUDFromModelWithTag(action.meta.modelTag, store.getState().models);
            if (!crud) {
              store.dispatch((0, _api.getModels)(store.getState().adminUrl));
            } else {
              store.dispatch((0, _api.getEntries)(store.getState().baseUrl + crud.index));
            }
            break;
          }
        default:
          break;

      }
      var result = next(action);
      return result;
    };
  };
};