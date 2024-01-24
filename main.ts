function lives () {
	
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.brick, function (sprite, location) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
	
})
let cherryTime = 0
info.setLife(3)
info.setScore(0)
let Player1 = sprites.create(img`
    . . f f f f f f f f f . . 
    . f f 5 5 5 5 5 5 5 f f . 
    f f 5 5 5 5 5 5 5 5 5 f f 
    f 5 5 f f 5 5 5 5 5 5 5 f 
    f 5 5 f f 5 5 5 5 5 5 5 f 
    f 5 5 f f 5 5 5 f f f f f 
    f 5 5 f f 5 5 f f . . . . 
    f 5 5 5 5 5 5 5 f f . . . 
    f 5 5 5 5 5 5 5 5 f f f f 
    f 5 5 5 5 5 5 5 5 5 5 5 f 
    f f 5 5 5 5 5 5 5 5 5 f f 
    . f f 5 5 5 5 5 5 5 f f . 
    . . f f f f f f f f f . . 
    `, SpriteKind.Player)
Player1.setPosition(40, 40)
scene.cameraFollowSprite(Player1)
let Ghosty_1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 8 8 8 8 8 . . . . . 
    . . . . 8 8 8 8 8 8 8 8 8 . . . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    . 8 8 8 1 1 8 8 8 8 8 1 1 8 8 8 
    . 8 8 8 1 f 8 8 8 8 8 1 f 8 8 8 
    . 8 8 8 1 f 8 8 8 8 8 1 f 8 8 8 
    . 8 8 8 1 f 8 8 8 8 8 1 f 8 8 8 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    . 8 8 8 8 f 8 f 8 f 8 8 8 8 8 8 
    . 8 8 8 8 8 f 8 f 8 f 8 8 8 8 8 
    . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    . 8 8 8 . 8 8 8 . 8 8 8 . 8 8 8 
    . . 8 . . . 8 . . . 8 . . . 8 . 
    `, SpriteKind.Enemy)
Ghosty_1.setBounceOnWall(true)
Ghosty_1.setPosition(200, 70)
Ghosty_1.setVelocity(38, 40)
let Ghosty2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . a a a a a . . . . . 
    . . . . a a a a a a a a a . . . 
    . . . a a a a a a a a a a a . . 
    . . a a a a a a a a a a a a a . 
    . a a a a a a a a a a a a a a a 
    . a a a 1 1 a a a a a 1 1 a a a 
    . a a a 1 f a a a a a 1 f a a a 
    . a a a 1 f a a a a a 1 f a a a 
    . a a a 1 f a a a a a 1 f a a a 
    . a a a a a a a a a a a a a a a 
    . a a a a f a f a f a a a a a a 
    . a a a a a f a f a f a a a a a 
    . a a a a a a a a a a a a a a a 
    . a a a . a a a . a a a . a a a 
    . . a . . . a . . . a . . . a . 
    `, SpriteKind.Enemy)
Ghosty2.setBounceOnWall(true)
Ghosty2.setVelocity(38, 40)
Ghosty2.setPosition(280, 70)
let Ghosty3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . . 2 2 2 2 2 2 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 2 2 1 1 2 2 2 2 2 1 1 2 2 2 
    . 2 2 2 1 f 2 2 2 2 2 1 f 2 2 2 
    . 2 2 2 1 f 2 2 2 2 2 1 f 2 2 2 
    . 2 2 2 1 f 2 2 2 2 2 1 f 2 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 2 2 2 f 2 f 2 f 2 2 2 2 2 2 
    . 2 2 2 2 2 f 2 f 2 f 2 2 2 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 2 2 . 2 2 2 . 2 2 2 . 2 2 2 
    . . 2 . . . 2 . . . 2 . . . 2 . 
    `, SpriteKind.Enemy)
Ghosty3.setBounceOnWall(true)
Ghosty3.setPosition(200, 134)
Ghosty3.setVelocity(38, 40)
let Ghosty4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . 3 3 3 1 1 3 3 3 3 3 1 1 3 3 3 
    . 3 3 3 1 f 3 3 3 3 3 1 f 3 3 3 
    . 3 3 3 1 f 3 3 3 3 3 1 f 3 3 3 
    . 3 3 3 1 f 3 3 3 3 3 1 f 3 3 3 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . 3 3 3 3 f 3 f 3 f 3 3 3 3 3 3 
    . 3 3 3 3 3 f 3 f 3 f 3 3 3 3 3 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    . 3 3 3 . 3 3 3 . 3 3 3 . 3 3 3 
    . . 3 . . . 3 . . . 3 . . . 3 . 
    `, SpriteKind.Enemy)
Ghosty4.setBounceOnWall(true)
Ghosty4.setPosition(280, 134)
Ghosty4.setVelocity(38, 40)
tiles.setCurrentTilemap(tilemap`level2`)
controller.moveSprite(Player1, 100, 100)
tiles.setTileAt(tiles.getTileLocation(3, 2), img`Cherry`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . 
    . . . . . . . . . . 7 . . 
    . . . . . . 7 7 7 7 7 . . 
    . 2 2 2 7 7 7 . . . 7 . . 
    2 2 2 1 2 7 . . . 7 7 . . 
    2 2 2 1 1 2 d 2 . 7 . . . 
    2 2 2 1 2 d 2 2 2 7 . . . 
    2 2 2 d d 2 2 2 2 2 . . . 
    2 2 d 2 2 2 2 2 2 2 2 . . 
    . d 2 2 2 2 2 2 2 1 2 . . 
    . . d 2 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 . . . 
    . . . . 2 2 2 2 2 . . . . 
    `, SpriteKind.Food)
forever(function () {
    if (tiles.tileAtLocationEquals(Player1.tilemapLocation(), assets.tile`transparency16`)) {
        tiles.setTileAt(Player1.tilemapLocation(), sprites.vehicle.roadHorizontal)
        cherryTime += 1
        info.setScore(info.score() + 1)
    }
})
forever(function () {
    if (Player1.overlapsWith(Ghosty_1) && cherryTime == 1) {
        Ghosty_1.setPosition(200, 70)
    } else if (Player1.overlapsWith(Ghosty_1) && cherryTime != 1) {
        info.changeLifeBy(-1)
        Player1.setPosition(40, 40)
    }
    if (Player1.overlapsWith(Ghosty2) && cherryTime == 1) {
        Ghosty2.setPosition(280, 70)
    } else if (Player1.overlapsWith(Ghosty2) && cherryTime != 1) {
        info.changeLifeBy(-1)
        Player1.setPosition(40, 40)
    }
    if (Player1.overlapsWith(Ghosty3) && cherryTime == 1) {
        Ghosty3.setPosition(200, 134)
    } else if (Player1.overlapsWith(Ghosty3) && cherryTime != 1) {
        info.changeLifeBy(-1)
        Player1.setPosition(40, 40)
    }
    if (Player1.overlapsWith(Ghosty4) && cherryTime == 1) {
        Ghosty4.setPosition(280, 134)
    } else if (Player1.overlapsWith(Ghosty4) && cherryTime != 1) {
        info.changeLifeBy(-1)
        Player1.setPosition(40, 40)
    }
})
