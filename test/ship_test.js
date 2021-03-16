const expect = require('chai').expect;

describe('checkForShip', function() {

    let checkForShip = require('../game_logic/ship_methods').checkForShip;
    let player = {
        ships: [
            {
                locations: [
                    [0, 0],
                    [0, 1],
                ]
            },
            {
                locations: [
                    [3, 3],
                    [3, 4],
                ]
            }
        ]
    };

    it('should correctly report no ship at a given players coordinate', function() {
        expect(checkForShip(player, [9, 9])).to.be.false;
    });

    it('should correctly report ship at a given players coordinate', function() {
        expect(checkForShip(player, [0, 0])).to.be.true;
    });

    it('should correctly report ship with multiple coordinates', function() {
        expect(checkForShip(player, [9, 9])).to.be.false;
        expect(checkForShip(player, [0, 0])).to.be.true;
        expect(checkForShip(player, [0, 1])).to.be.true;
    });

    it('should correctly report ship with multiple coordinates', function() {
        expect(checkForShip(player, [9, 9])).to.be.false;
        expect(checkForShip(player, [0, 0])).to.be.true;
        expect(checkForShip(player, [0, 1])).to.be.true;
    });

    it('should handel checking multiple ships', function() {
        expect(checkForShip(player, [9, 9])).to.be.false;
        expect(checkForShip(player, [0, 0])).to.be.true;
        expect(checkForShip(player, [3, 4])).to.be.true;
    });
});