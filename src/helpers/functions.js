// Authors: Jerek Shoemaker and Austin Crane
// Helper functions used throughout the project


// Convert a string from regular format to URL format
export function makeURL(str) {
  return str.toLowerCase().replace(new RegExp(' ', 'g'), '_');
}
