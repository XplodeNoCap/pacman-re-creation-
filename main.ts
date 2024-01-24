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
Ghosty_1.setPosition(randint(0, 10), randint(0, 10))
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
Ghosty2.setPosition(randint(0, 10), randint(0, 10))
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
Ghosty3.setPosition(randint(0, 10), randint(0, 10))
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
Ghosty4.setPosition(randint(0, 10), randint(0, 10))
tiles.setCurrentTilemap(tilemap`level2`)
controller.moveSprite(Player1, 100, 100)
