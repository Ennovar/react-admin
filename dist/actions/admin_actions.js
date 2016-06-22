"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doSomething = doSomething;
function doSomething() {
  console.log("something happened");
  return {
    type: 'SOME_TYPE'
  };
}