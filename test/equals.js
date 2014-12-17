require('../lib/util.js');
var assert = require('chai').assert;

describe('Array', function(){ 
	describe('#equals',function(){
		it("Should accurately compare two different arrays with the same properties and pass",function(){
			assert([2,2].equals([2,2]));
		});
		it("Should accurately compare two different arrays with different properties and return false",function(){
			assert([2,2].equals([2,3]) === false);
		});
	});
});
