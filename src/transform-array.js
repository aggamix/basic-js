const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  if(!Array.isArray(arr)) throw new Error ("\'arr\' parameter must be an instance of the Array!");

  let result = [...arr];
  result.map((item, index) => {
    if(item === '--double-next') result[index] = result[index + 1];
      if(item === '--double-prev') result[index] = result[index - 1];
      if(item === '--discard-prev') {
        result[index - 1] = undefined;
        result[index] = undefined;
      }
      if(item === '--discard-next') {
        result[index + 1] = undefined;
        result[index] = undefined;
      }
  });

  return result.filter((item) => item != undefined);
}

module.exports = {
  transform
};
