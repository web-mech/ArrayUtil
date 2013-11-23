require('assert');
require('../lib/util.js');
var assert = require('better-assert');

describe('Array', function(){
	describe('suffle()',function(){
		
		it("Array should be a shuffled representation of itself after calling shuffle",function(){
			var oarray = [0,1,2,3,4];
			
			assert([0,1,2,3,4].equals(oarray));

			oarray.shuffle();

			assert([0,1,2,3,4].equals(oarray) === false);
		});
	});
});