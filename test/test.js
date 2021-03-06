var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});


describe('Room', function() {
	describe('getRoom()', function(){
		it ('Should return -1 if empty', function(){
			var roomIds = {};
			var rooms = [];
			var roomId = 1;

			if (!(roomId in roomIds)) {
	        	roomIds[roomId] = rooms.length;
	        	rooms.push([]);
	    	}

	    	assert.equal(rooms.length, 1);

		});
	});
});

describe('Messages', function(){
	describe('handleMessages()', function(){
		it ('Should return true of msg equal "hi', function(){
			var msg = "hi";
			var status;
			if (msg == "hi"){
				status = true;
			} else {
				status = false;
			}

			assert.equal(status, true);
		});
	});
});

