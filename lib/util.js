// attach the .compare method to Array's prototype to call it on any array
/**
 * Compare two arrays
 * @TODO Add flag for strict comparison
 */
Array.prototype.equals = Array.prototype.compare = function equals(array) {
    //http://stackoverflow.com/questions/7837456/comparing-two-arrays-in-javascript
    if (typeof array == 'undefined' || !Array.isArray(array))
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0; i < this.length; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] !== array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
};

/**
 * 
 */
Array.prototype.toObject = function toObject() {
  //http://stackoverflow.com/questions/7837456/comparing-two-arrays-in-javascript
  var object = {};
  for (var i = 0; i < this.length; ++i){
    if (this[i] !== undefined){
        object[i] = this[i];
    }
  }
  return object;
};