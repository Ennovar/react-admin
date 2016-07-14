// Authors: Jerek Shoemaker and Austin Crane
// Helper functions used throughout the project


// Convert a string from regular format to URL format
export function makeURL(str) {
  return str.toLowerCase().replace(new RegExp(' ', 'g'), '_');
}

export function toObj(array, param) {
  const outer = {};
  for (let i = 0; i < array.length; i++) {
    if (param === 'tag') {
      outer[array[i].tag] = array[i];
      outer[array[i].tag].isFetching = false;
    } else if (param === 'id') {
      outer[array[i].id] = array[i];
    } else {
      // Do nothing
    }
  }
  return outer;
}
