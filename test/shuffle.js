var assert = require('assert');
var bassert = require('better-assert');

require('../lib/util.js');

describe('Array', function(){
	describe('suffle()',function(){
		
		it("Array should be a shuffled representation of itself after calling shuffle",function(){
			var oarray = [0,1,2,3,4];
			
			bassert([0,1,2,3,4].equals(oarray));

			oarray.shuffle();

			bassert([0,1,2,3,4].equals(oarray) === false);
		});
	});
});