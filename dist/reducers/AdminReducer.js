"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AdminReducer;
function AdminReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {
    message: "hello"
  } : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  console.log(action.type);
  switch (action.type) {
    case "@@redux/INIT":

    default:

  }
}