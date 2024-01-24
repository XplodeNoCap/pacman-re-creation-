let Player1 = sprites.create(img`
    ..................
    ....fffffffff.....
    ..fff5555555fff...
    .ff55555555555ff..
    .f5555555555555ff.
    ff55ff5555555555f.
    f555ff5555555555f.
    f555ff5555555ffff.
    f555ff5555ffff....
    f55555555ff.......
    f555555555fff.....
    f55555555555fff...
    f5555555555555fff.
    ff55555555555555f.
    .f5555555555555ff.
    .ff55555555555ff..
    ..fff5555555fff...
    ....fffffffff.....
    `, SpriteKind.Player)
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
controller.moveSprite(Player1, 100, 100)
