var expect = require('chai').expect;
var TicTacToe = require('../core/game');

describe('Test multi structure', function () {
    it('game', function (done) {
        expect(TicTacToe).to.be.a('object');

        done();
    });
});