require('../lib/util.js');
var assert = require('chai').assert;

describe('Array', function(){
	describe('#toObject',function(){
		//really simple test that tests the type, more to come as object-util project develops
		it("Array should represent an object after calling toObject",function(){
			assert(typeof [2,2].toObject() == 'object');
		});
	});
});