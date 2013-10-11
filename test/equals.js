var assert = require('assert');
var bassert = require('better-assert');

require('../lib/util.js');

describe('Array', function(){
	describe('Equals',function(){

		it("Should accurately compare two different arrays with the same properties and pass",function(){
			bassert([2,2].equals([2,2]));
		});

		it("Should accurately compare two different arrays with different properties and return false",function(){
			bassert([2,2].equals([2,3]) === false);
		});
	});
});
