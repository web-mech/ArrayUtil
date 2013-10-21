require('assert');
require('../lib/util.js');
var assert = require('better-assert');

describe('Array',function(){
	describe('#merge([1,2])',function(){
		it('Should contain values of both arrays after calling merge',function(){
			var array = [1,2,3];
			var array_2 = [4,5,6];
			array.merge(array_2);
			assert(array.equals([1,2,3,4,5,6]));
		});
	});
});