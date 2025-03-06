/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  if (Array.isArray(obj) && obj.length) {
    return false;
  }
  if (!Array.isArray(obj) && Object.values(obj).length) {
    return false;
  }
  return true;
};
