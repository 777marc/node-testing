function checkForShip(player, coordinates) {
    let shipPresent = [];
    for(let i = 0; i < player.ships.length; i++) {
        let ship = player.ships[i];
        shipPresent = ship.locations.filter(actualCoordinates => {
            return actualCoordinates[0] === coordinates[0] &&
            actualCoordinates[1] === coordinates[1];
        });
    }
    return shipPresent.length > 0;
}

module.exports.checkForShip = checkForShip;