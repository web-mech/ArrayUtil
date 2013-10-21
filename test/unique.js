require('assert');
require('../lib/util.js');

var assert = require('better-assert');


describe('Array',function(){
	describe('#unique()',function(){
		it("Should only contain unique values after calling unique",function(){
			var array = [1,1,2,3];
			assert(array.unique().equals([1,2,3]));
		});
	});
});