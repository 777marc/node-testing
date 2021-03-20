function checkForShip(player, coordinates) {
    let shipPresent = [];
    for(let i = 0; i < player.ships.length; i++) {
        let ship = player.ships[i];
        shipPresent = ship.locations.filter(actualCoordinates => {
            return actualCoordinates[0] === coordinates[0] &&
            actualCoordinates[1] === coordinates[1];
        });
        if (shipPresent.length > 0) {
            return ship;
        }
    }
    return false;
}

function damageShip(ship, coordinates) {
    ship.damage.push(coordinates);
}

function fireOnShip(player, coordinates) {

    let ship = checkForShip(player, coordinates);

    if(ship) {
        damageShip(ship, coordinates);
    }

}

module.exports = {
    checkForShip,
    damageShip,
    fireOnShip
};