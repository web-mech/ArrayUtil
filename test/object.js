var assert = require('assert');
var bassert = require('better-assert');

require('../lib/util.js');

describe('Array', function(){
	describe('toObject()',function(){
		//really simple test that tests the type, more to come as object-util project develops
		it("Array should represent an object after calling toObject",function(){
			bassert(typeof [2,2].toObject() == 'object');
		});
	});
});