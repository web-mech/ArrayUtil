require('../lib/util.js');
var assert = require('chai').assert;

describe('Array',function(){
	describe('#merge',function(){
		it('Should contain values of both arrays after calling merge',function(){
			var array = [1,2,3];
			var array_2 = [3,4,5,6];
			assert(array.merge(array_2).equals([1, 2, 3, 4, 5, 6]));
		});
	});
});