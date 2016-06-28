'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdminActions = function () {
  function AdminActions() {
    _classCallCheck(this, AdminActions);
  }

  _createClass(AdminActions, null, [{
    key: 'setMode',


    // /**
    //  * initialize - initialize an instance of AdminActions, this requires a base url
    //  *  to help out the functions
    //  *
    //  * @param  {string} baseUrl description
    //  * @return {AdminActions}         instance of AdminActions
    //  */
    // initialize(baseUrl) {
    //   this.baseUrl = baseUrl;
    // }
    /* ******************************** SETTERS ******************************** */
    value: function setMode(mode) {
      return {
        type: 'SET_MODE',
        payload: mode
      };
    }

    /*
     * This function accepts a model title, in url form and sends it to the reducer
     * to be converted to an array index and put into the state
     *
     * Admin and Model components are the only components that use this function
     */

  }, {
    key: 'setModel',
    value: function setModel(model) {
      return {
        type: 'SET_MODEL',
        payload: model
      };
    }

    /*
     * This function accepts a entry id and sends it to the reducer to be converted
     * to an array index and put into the state
     */

  }, {
    key: 'setEntry',
    value: function setEntry(entry) {
      return {
        type: 'SET_ENTRY',
        payload: entry
      };
    }
    /* ****************************** END SETTERS ****************************** */

    /* ******************************** GETTERS ******************************** */

  }, {
    key: 'getModels',
    value: function getModels() {
      var payload = _axios2.default.get(this.baseUrl + '/admin');
      return {
        type: 'GET_MODELS',
        payload: payload
      };
    }
  }, {
    key: 'getEntries',
    value: function getEntries(model) {
      var url = self.baseUrl + '/' + model;
      var payload = _axios2.default.get(url);

      return {
        type: 'GET_ENTRIES',
        payload: payload,
        meta: {
          model: model
        }
      };
    }
  }, {
    key: 'getEntry',
    value: function getEntry(id, model) {
      var url = this.baseUrl + '/' + model + '/' + id;
      var payload = _axios2.default.get(url);

      return {
        type: 'GET_ENTRIES',
        payload: payload
      };
    }
    /* ****************************** END GETTERS ****************************** */

  }]);

  return AdminActions;
}();

exports.default = AdminActions;