Array.prototype.equals = Array.prototype.compare = function equals(array) {
  if (!Array.isArray(array) || this.length !== array.length) {
    return false;
  }
  for (var i = 0; i < this.length; i++) {
    // Check if we have nested arrays
    if (this[i] instanceof Array && array[i] instanceof Array) {
      // recurse into the nested arrays
      if (!this[i].equals(array[i])) {
        return false;
      }
    } else if (this[i] !== array[i]) {
      return false;
    }
  }
  return true;
};

Array.prototype.toObject = function toObject() {
  var object = {};
  for (var i = 0; i < this.length; ++i) {
    if (this[i] !== undefined) {
      object[i] = this[i];
    }
  }
  return object;
};

Array.prototype.shuffle = function shuffle() {
  var counter = this.length,
    temp, index;

  // While there are elements in the array
  while (counter--) {
    // Pick a random index
    index = (Math.random() * counter) | 0;

    // And swap the last element with it
    temp = this[counter];
    this[counter] = this[index];
    this[index] = temp;
  }

  return this;
};

Array.prototype.unique = function() {
  var a = this.slice(0);
  for (var i = 0; i < a.length; ++i) {
    for (var j = i + 1; j < a.length; ++j) {
      if (a[i] === a[j])
        a.splice(j--, 1);
    }
  }
  return a;
};

Array.prototype.merge = function(array) {
  if (!Array.isArray(array)) {
    return false;
  }
  Array.prototype.push.apply(this, array);
  return this.unique();
};