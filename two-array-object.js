// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    const result = {};
  
    for (let i = 0; i < keys.length; i++) {
      // If there are enough values, assign the corresponding value to the key
      if (i < values.length) {
        result[keys[i]] = values[i];
      } else {
        // If there are not enough values, assign null to the key
        result[keys[i]] = null;
      }
    }
  
    return result;
  }
