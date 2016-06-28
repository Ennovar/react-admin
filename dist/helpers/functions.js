'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeURL = makeURL;
// Authors: Jerek Shoemaker and Austin Crane
// Helper functions used throughout the project

// Convert a string from regular format to URL format
function makeURL(str) {
  return str.toLowerCase().replace(new RegExp(' ', 'g'), '_');
}