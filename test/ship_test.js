const expect = require('chai').expect;

describe('checkForShip', function() {

    let checkForShip = require('../game_logic/ship_methods').checkForShip;
    let player = {
        ships: [
            {
                locations: [
                    [0, 0],
                ]
            }
        ]
    };
    it('should correctly report no ship at a given players coordinate', function() {

        expect(checkForShip(player, [9, 9])).to.be.false;
    });

    it('should correctly report ship at a given players coordinate', function() {
        let player = {
            ships: [
                {
                    locations: [
                        [0, 0],
                    ]
                }
            ]
        };
        expect(checkForShip(player, [0, 0])).to.be.true;
    });
});