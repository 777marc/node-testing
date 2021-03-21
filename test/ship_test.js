const expect = require('chai').expect;

describe('checkForShip', function() {

    let checkForShip = require('../game_logic/ship_methods').checkForShip;

    let player = {}; 

    before(function () {
        player = {
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
    });

    after(function() {
        console.log('entire suite completed')
    })

    it('should correctly report no ship at a given players coordinate', function() {
        expect(checkForShip(player, [9, 9])).to.be.false;
    });

    it('should correctly report ship at a given players coordinate', function() {
        console.log(checkForShip(player, [0, 0]))
        expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
    });

    it('should correctly report ship with multiple coordinates', function() {
        expect(checkForShip(player, [9, 9])).to.be.false;
        expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
        expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
    });

    it('should correctly report ship with multiple coordinates', function() {
        expect(checkForShip(player, [9, 9])).to.be.false;
        expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
        expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
    });

    it('should handel checking multiple ships', function() {
        expect(checkForShip(player, [9, 9])).to.be.false;
        expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
        expect(checkForShip(player, [3, 4])).to.deep.equal(player.ships[1]);
    });
});

describe('damageShip', function() {

    let damageShip = require('../game_logic/ship_methods').damageShip;

    it('should register damage for a given ship at a given location', function() {

        let ship = {
            locations: [[0,0]],
            damage: []
        };

        damageShip(ship, [0, 0]);

        expect(ship.damage).to.not.be.empty;
        expect(ship.damage[0]).to.deep.equal([0, 0]);
    });
});

describe('fireOnShip', function() {
    
    let fireOnShip = require('../game_logic/ship_methods').fireOnShip;

    let player = {
        ships: [
            {
                locations: [
                    [0, 0],
                    [0, 1],
                ],
                damage: []
            },
            {
                locations: [
                    [3, 3],
                    [3, 4],
                ],
                damage: []
            }
        ]
    };

    it('should register damage if fire damages ship', function() {
        fireOnShip(player, [0, 0]);
        expect(player.ships[0].damage).to.not.be.empty;
        expect(player.ships[1].damage).to.be.empty;
    });

    it('should not register damage if fire misses ship', function() {
        fireOnShip(player, [9, 9]);
        expect(player.ships[0].damage).to.not.be.empty;
    });

})
