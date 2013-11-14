require('assert');
require('../lib/util.js');
var assert = require('better-assert');

describe('Array', function(){
	describe('#range',function(){
		it("Should return a subset of an array when calling a specific range of two parameters",function(){
			assert([0,1,3,4].range(1,2).equals([1,3]));
		});

		it("Should return a subset of an array when calling a specific range of two parameters",function(){
			assert([0,1,3,4,10,12,33,100].range(1,2).equals([1,3]));
		});

		it("Should return itself when the min is greater than max",function(){
			assert([0,1,3,4].range(3,1).equals([0,1,3,4]));
		});

		it("Should return itself when a range is out of bounds",function(){
			assert([0,1,3,4].range(0,12).equals([0,1,3,4]));
		});
	});

	describe('#valueRange',function(){
		it("Should return a subset of an array when calling a specific range by value of two parameters",function(){
			assert([0,1,2,3,4,10,20,30,50,70,90,100].valueRange(15,65).equals([20,30,50]));
		});

		it("Should return itself when the subject is an empty array",function(){
			assert([].valueRange(1,3).equals([]));
		});
	});
});