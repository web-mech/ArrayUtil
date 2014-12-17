var assert = require('chai').assert,
  Users = require('./fixtures/users');

require('../lib/util');

describe('Array', function() {
  describe('#group', function() {
    it('Groups items with a single like attribute', function() {
      var users = Users.group(function(user) {
        return [user.code];
      });
      assert(users[0].length === 3);
    });

    it('Groups items with multiple like attributes', function() {
      var users = Users.group(function(user) {
        return [user.code, user.inventory];
      });
      assert(users[0].length === 2);
    });
  });
});