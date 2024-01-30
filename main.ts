scene.onOverlapTile(SpriteKind.Player, sprites.builtin.brick, function (sprite, location) {
    if (!(teleportState)) {
        new_location = tiles.getTilesByType(sprites.builtin.brick)._pickRandom()
        tiles.placeOnTile(sprite, new_location.getNeighboringLocation(CollisionDirection.Left))
        teleportState = true
    }
})
function setupGhosts (value: Sprite) {
    value.setBounceOnWall(true)
    value.setVelocity(38, 40)
    new_location = tiles.getTilesByType(sprites.vehicle.roadHorizontal)._pickRandom()
    if (value.image.equals(assets.image`Dark blue`)) {
        new_location = tiles.getTilesByType(sprites.vehicle.roadHorizontal)._pickRandom()
        while (Player1.tilemapLocation().column == new_location.column && Player1.tilemapLocation().row == new_location.row) {
            new_location = tiles.getTilesByType(sprites.vehicle.roadHorizontal)._pickRandom()
        }
    } else if (value.image.equals(assets.image`Purple`)) {
        new_location = tiles.getTilesByType(sprites.vehicle.roadVertical)._pickRandom()
        while (Player1.tilemapLocation().column == new_location.column && Player1.tilemapLocation().row == new_location.row) {
            new_location = tiles.getTilesByType(sprites.vehicle.roadVertical)._pickRandom()
        }
    } else if (value.image.equals(assets.image`Pink`)) {
        new_location = tiles.getTilesByType(sprites.builtin.brick)._pickRandom()
        while (Player1.tilemapLocation().column == new_location.column && Player1.tilemapLocation().row == new_location.row) {
            new_location = tiles.getTilesByType(sprites.builtin.brick)._pickRandom()
        }
    } else {
        new_location = tiles.getTilesByType(sprites.vehicle.roadTurn3)._pickRandom()
        while (Player1.tilemapLocation().column == new_location.column && Player1.tilemapLocation().row == new_location.row) {
            new_location = tiles.getTilesByType(sprites.vehicle.roadTurn3)._pickRandom()
        }
    }
    value.setPosition(new_location.x, new_location.y)
    if (distance(value, Player1) < 4 * 16) {
        value.setImage(assets.image`Bluey`)
    }
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    if (sprite.image.equals(assets.image`Bluey`)) {
        new_location = tiles.getTilesByType(sprites.vehicle.roadHorizontal)._pickRandom()
        info.setScore(info.score() + 1)
        sprite.setPosition(new_location.x, new_location.y)
    } else {
        info.changeLifeBy(-1)
        Player1.setPosition(40, 40)
    }
})
function distance (sprite1: Sprite, sprite2: Sprite) {
    return Math.sqrt((sprite1.x - sprite2.x) ** 2 + (sprite1.y - sprite2.y) ** 2)
}
function reverseBluey () {
    GhostList[0].setImage(assets.image`Dark blue`)
    GhostList[1].setImage(assets.image`Purple`)
    GhostList[2].setImage(assets.image`Red`)
    GhostList[3].setImage(assets.image`Pink`)
}
function pathLocations () {
	
}
function Bluey () {
    for (let value2 of GhostList) {
        value2.setImage(assets.image`Bluey`)
    }
}
let cherryTime = 0
let new_location: tiles.Location = null
let teleportState = false
let GhostList: Sprite[] = []
let Player1: Sprite = null
namespace userconfig{
    export const ARCADE_SCREEN_WIDTH = 260;
    export const ARCADE_SCREEN_HEIGHT = 200;
}
info.setLife(3)
info.setScore(0)
Player1 = sprites.create(assets.image`Player1_Pakman`, SpriteKind.Player)
Player1.setPosition(40, 40)
scene.cameraFollowSprite(Player1)
GhostList = [
sprites.create(assets.image`Dark blue`, SpriteKind.Enemy),
sprites.create(assets.image`Purple`, SpriteKind.Enemy),
sprites.create(assets.image`Red`, SpriteKind.Enemy),
sprites.create(assets.image`Pink`, SpriteKind.Enemy)
]
tiles.setCurrentTilemap(tilemap`level2`)
for (let value of GhostList) {
    setupGhosts(value)
}
controller.moveSprite(Player1, 100, 100)
for (let index = 0; index <= 2; index++) {
    tiles.setTileAt(tiles.getTilesByType(sprites.vehicle.roadHorizontal)._pickRandom(), assets.tile`Cherry`)
}
forever(function () {
    if (tiles.tileAtLocationEquals(Player1.tilemapLocation(), assets.tile`Cherry`)) {
        tiles.setTileAt(Player1.tilemapLocation(), sprites.vehicle.roadHorizontal)
        cherryTime += 1
        info.setScore(info.score() + 1)
        Bluey()
        timer.debounce("action", 10000, function () {
            cherryTime += -1
            reverseBluey()
        })
        tiles.setTileAt(tiles.getTilesByType(sprites.vehicle.roadHorizontal)._pickRandom(), assets.tile`Cherry`)
    }
    if (!(tiles.tileAtLocationEquals(Player1.tilemapLocation(), sprites.builtin.brick))) {
        teleportState = false
    }
})
