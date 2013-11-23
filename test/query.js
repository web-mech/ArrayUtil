require('assert');
require('../lib/util.js');
var assert = require('better-assert');
var fixture = [
	{
		name:'John',
		age:15
	},
	{
		name:'Mike',
		age:24
	},
	{
		name:'Ashley',
		age:20
	},
	{
		name:'Joe',
		age:50
	}
];

describe('Array',function(){
	describe('#query',function(){
		it("Should return a subset of an array when querying by parameters",function(){
			assert([1,3,4].query({range:[1,1]}).equals([3]));
			
			assert(fixture.query({age:{range:[20,24]}}).equals([{
				name:'Mike',
				age:24
			},
			{
				name:'Ashley',
				age:20
			}]));
		});
	});
});