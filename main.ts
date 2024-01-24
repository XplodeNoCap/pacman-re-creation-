function lives () {
	
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
	
})
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
