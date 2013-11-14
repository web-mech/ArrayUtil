/**
 * Compare two arrays
 * @TODO Add flag for strict comparison
 */
Array.prototype.equals = Array.prototype.compare = function equals(array) {
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
  var object = {};
  for (var i = 0; i < this.length; ++i){
    if (this[i] !== undefined){
        object[i] = this[i];
    }
  }
  return object;
};

Array.prototype.shuffle = function shuffle() {
    var counter = this.length, temp, index;

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
    var a = this.concat();

    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

Array.prototype.merge = function(array){
    if (typeof array == 'undefined' || !Array.isArray(array))
        return false;
    Array.prototype.push.apply(this, array);
    return this;
};

//index ranges
Array.prototype.range = function(min,max){
    if(!this[min] || !this[max] || min > max)
        return this;

    var newArray = [];
    for(var i=min; i<=max;i++){
        newArray.push(this[i]);
    }
    return newArray;
};

Array.prototype.valueRange = function valueRange(min,max){
    if(this.length < 1)
        return this;
    var newArray = [];
    for(var i = 0;i<this.length; i++){
        if(this[i] >= min && this[i] <=max)
            newArray.push(this[i]);
    }
    return newArray;
};

